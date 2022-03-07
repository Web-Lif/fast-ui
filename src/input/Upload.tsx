import { css } from '@emotion/css'
import React, { CSSProperties, FC, ReactNode, useRef, useState } from 'react'
import { PlusOutlined, LoadingOutlined, DeleteOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { produce } from 'immer'

type FileType = {

    /** 名称 */
    name: string

    /** 类型 */
    type: string

    /** 下载的地址 */
    url: string

    /** 上传进度 */
    progress: number

    /** 上传状态 */
    state: 'error' | 'success' | 'progress'
}

export interface UploadProps {

    /** 要上传的文件信息 */
    files: FileType[]

    /** 样式信息 */
    style?: CSSProperties

    /** 可接受的类型 */
    accept?: string

    /** 是否支持多选 */
    multiple?: boolean

    /** 自定义预览信息 */
    renderPreview?: (file: FileType) => ReactNode

    /** 渲染 Action Icon */
    renderActionIcon?: (file: FileType, action: ReactNode, clickAction: (name: string) => void) => ReactNode

    /** 上传文件执行的方法 */
    onUpload?: (files: FileList | null) => void

    /** 改变触发的事件 */
    onChange?: (files: FileType[]) => void

    /** 点击 Action 触发的事件*/
    onActionClick?: (name: string) => void

}


interface UploadWrapProps {
    state?: 'error' | 'success' | 'progress'
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const UploadWrap: FC<UploadWrapProps> = ({
    state,
    children,
    onClick
}) => {

    let border: string = '1px dashed #d9d9d9'
    let hoverBorderColor: string = '#1890ff'

    if (state === 'success') {
        border = '1px solid #d9d9d9'
        hoverBorderColor = '#1890ff'
    } else if (state === 'error') {
        border = '1px solid #ff4d4f'
        hoverBorderColor = '#ff4d4f'
    } else if (state === 'progress') {
        border = '1px solid #d9d9d9'
        hoverBorderColor = '#1890ff'
    }

    const renderDom = () => {
        if (state === 'progress') {
            return (
                <div
                    className={css`
                        text-align: center;
                    `}
                >
                    <LoadingOutlined spin />
                    <div
                        className={css`
                            margin-top: .5em;
                        `}
                    >
                        上传中...
                    </div>
                </div>
            )
        }

        return children
    }


    return (
        <div
            className={css`
            display: inline-flex;
            width: 104px;
            height: 104px;
            margin-right: 8px;
            margin-bottom: 8px;
            justify-content: center;
            align-items: center; 
            background-color: #fafafa;
            border: ${border};
            border-radius: 2px;
            cursor: pointer;
            transition: border-color .3s;
            user-select: none;
            &:hover {
                border-color: ${hoverBorderColor};
            }
        `}
            onClick={(e) => {
                onClick?.(e)
            }}
        >
            {renderDom()}
        </div>
    )
}

/**
 * 图片上传
 */
const Upload: FC<UploadProps> = ({
    accept = '',
    multiple,
    files,
    onUpload,
    onChange,
    onActionClick = () => { },
    renderPreview,
    renderActionIcon
}) => {
    const fileRef = useRef<HTMLInputElement>(null)

    const renderAddFileDom = () => {
        let addFileDom: JSX.Element | null = (
            <div
                className={css`
                    text-align: center;
                `}
            >
                <PlusOutlined />
                <div
                    className={css`
                        margin-top: .5em;
                    `}
                >
                    上传文件
                </div>
            </div>
        )

        if ((!multiple && files.length === 0 ) || multiple) {
            return (
                <UploadWrap
                    onClick={() => {
                        fileRef.current?.click()
                    }}
                >
                    {addFileDom}
                </UploadWrap>
            )
        }
        return null
    }


    const renderContent = (file: FileType) => {
        if (renderPreview) {
            return renderPreview(file)
        }

        let actionIcon: ReactNode = (
            <>
                <span>
                    <DeleteOutlined
                        onClick={(e) => {
                            onActionClick('delete')
                            e.stopPropagation()
                        }}
                    />
                </span>
            </>
        )
        if (renderActionIcon) {
            actionIcon = renderActionIcon(file, actionIcon, onActionClick)
        }
        return (
            <div
                className={css`
                    width: 100%;
                    margin: 8px;
                    position: relative;
                `}
            >
                <div
                    onMouseUp={(e) => {
                        e.currentTarget.offsetLeft
                    }}
                    className={css`
                            z-index: 1;
                            display: flex;
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            background-color: #00000080;
                            opacity: 0;
                            justify-content: center;
                            align-items: center; 
                            color: #fff;
                            transition: all .3s;
                            &:hover {
                                opacity: 1;
                            }
                            > * {
                                opacity: .8;
                            }
                            > *:hover {
                                opacity: 1;
                            }
                            
                        `}
                >
                    {actionIcon}
                </div>
                <img
                    src={file.url}
                    className={css`
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                        `}
                >
                </img>
            </div>
        )
    }

    const renderImages = () => files.map(file => {
        const content = renderContent(file)
        return (
            <UploadWrap
                key={file.name}
                state={file.state}
            >
                {content}
            </UploadWrap>
        )
    })

    return (
        <>
            <div
                className={css({
                    display: 'flex',
                    alignItems: 'center'
                })}
            >
                {renderImages()}
                {renderAddFileDom()}
            </div>
            <input
                ref={fileRef}
                accept={accept}
                className={css({
                    display: 'none'
                })}
                type="file"
                value=""
                multiple={multiple}
                onChange={(e) => {
                    onUpload?.(e.target.files);
                    e.stopPropagation();
                    e.preventDefault()
                }}
            />
        </>
    )
}

export default Upload;
