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
 * desc: 这是基础的图片上传例子
 */
import React, { useState, useRef } from 'react';
import { Upload } from '@weblif/fast-ui';

export default () => {
    const [files, setFiles] = useState([]);
    return (
        <Upload
            files={files}
            onUpload={() => {
                return new Promise((res) => {
                    setTimeout(() => {
                        res([{
                            name: '1.jpg',
                            type: 'type',
                            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                            state: 'error'
                        }])
                    }, 1000)
                })
            }}
            onActionClick={(name) => {
                if (name === 'delete') {
                    setFiles([])
                }
            }}
            onChange={setFiles}
        />
    );
};
```

<API src="./Upload.tsx"></API>