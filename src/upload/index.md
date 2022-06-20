---
nav:
    title: 组件
    path: /components
group:
    path: /components/data
    title: 数据
---

## Upload 上传组件

文件选择上传和拖拽上传控件。

<br />

例子

```tsx
/**
 * title: 基础使用
 * desc: 这是基础的图片上传例子, 单个文件上传
 */
import { Upload } from '@weblif/fast-ui'
import React, { useState } from 'react'

export default () => {
    const [files, setFiles] = useState([])
    return (
        <Upload
            files={files}
            onUpload={() => {
                return new Promise((res) => {
                    setFiles([
                        {
                            name: '1.jpg',
                            type: 'type',
                            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                            state: 'progress',
                        },
                    ])
                    setTimeout(() => {
                        setFiles([
                            {
                                name: '1.jpg',
                                type: 'type',
                                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                                state: 'success',
                            },
                        ])
                    }, 10000)
                })
            }}
            onActionClick={(name) => {
                if (name === 'delete') {
                    setFiles([])
                }
            }}
            onChange={setFiles}
        />
    )
}
```

```tsx
/**
 * title: 多文件上传
 * desc: 这是一次性选择上传多个文件
 */
import { Upload } from '@weblif/fast-ui'
import React, { useState } from 'react'

export default () => {
    const [files, setFiles] = useState([])
    return (
        <Upload
            files={files}
            multiple
            onUpload={(data) => {
                return new Promise((res) => {
                    const addFIle = []
                    data.forEach((ele, index) => {
                        addFIle.push({
                            name: `${files.length + index + 1}.jpg`,
                            type: res.type,
                            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                            state: 'progress',
                        })
                    })

                    const result = [...files, ...addFIle]
                    setFiles(result)

                    // 模拟上传
                    setTimeout(() => {
                        setFiles(
                            result.map((file) => ({
                                ...file,
                                state: 'success',
                            }))
                        )
                    }, 1000)
                })
            }}
            onActionClick={(type, { name }) => {
                if (type === 'delete') {
                    setFiles([...files.filter((file) => file.name !== name)])
                }
            }}
            onChange={setFiles}
        />
    )
}
```

```tsx
/**
 * title: 自定义上传
 * desc: 进行自定义的逻辑控制
 */
import { Button, File, FileInstance } from '@weblif/fast-ui'
import React, { useRef } from 'react'

export default () => {
    const file = useRef<FileInstance>(null)
    return (
        <>
            <Button
                onClick={() => {
                    file.current.showOpenFilePicker()
                }}
            >
                点击上传文件
            </Button>
            <File
                file={file}
                onSelectFiles={(file) => {
                    console.log(file)
                }}
            />
        </>
    )
}
```

<API></API>
