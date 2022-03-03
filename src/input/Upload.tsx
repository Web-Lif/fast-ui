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

    /** 上传状态 */
    state: 'error' | 'success'
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
    onUpload?:(files: FileList | null) => Promise<FileType[]>

    /** 改变触发的事件 */
    onChange?: (files: FileType[]) => void

    /** 点击 Action 触发的事件*/
    onActionClick?: (name: string) =>  void
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
    onActionClick = () => {},
    renderPreview,
    renderActionIcon
}) => {
    const [loading, setLoading] = useState<boolean>(false)
    const fileRef= useRef<HTMLInputElement>(null)

    let border = '1px dashed #d9d9d9';

    const renderContent = () => {
        const addFileDom = (
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

        if (loading) {
            return (
                <Spin
                    indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                    spinning={loading}
                >
                    {addFileDom}
                </Spin>
            )
        }

        if (!multiple && files.length === 0) {
            return addFileDom
        }

        if (!multiple && files.length > 0) {
            const file = files[0]
            border = '1px solid #d9d9d9'
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
        return null;
    }

    const content = renderContent()
    return (
        <>
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
                    &:hover {
                        border-color: #1890ff;
                    }
                    
                `}
                onClick={() => {
                    fileRef.current?.click()
                }}
            >
                {content}
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
                    if (!multiple) {
                        setLoading(true)
                    }
                    onUpload?.(e.target.files).then((resp) => {
                        onChange?.(resp);
                    }).finally(() => {
                        setLoading(false)
                    });
                    e.stopPropagation();
                    e.preventDefault()
                }}
            />
        </>
    )
}

export default Upload;
