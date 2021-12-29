---
nav:
    title: Components
    path: /components
group:
    path: /components/table
    title: 表格
---

## Table 表格



```tsx
/**
 * title: 基础表格
 * desc: 基础的表格信息, 显示列和行
 */
import React, { useState, useRef} from 'react';
import { Table } from '@weblif/fast-ui';
import { message, Input } from 'antd'
import 'antd/dist/antd.css';

/** Mock 数据 */
const mockData = () => {
    const data = []
    for (let i=0; i< 1000; i += 1) {
        data.push({
            username: 'zhangj',
            email: 'zhang@xx.com',
            age: '25',
            tags: '人类'
        })
    }
    return data
}

export default () => {
    const [data, setData] = useState(mockData())
    return (
        <Table
            width={500}
            height={200}

            rowSelection={{
                model: 'multiple'
            }}
            columns={[{
                name: 'username',
                title: '人员名称'
            },{
                name: 'email',
                title: '邮箱地址'
            },{
                name: 'age',
                title: '年龄'
            },{
                name: 'tags',
                title: '标签'
            }]}
            rows={data}
            onChange={setData}
        />
    )
}
```

<br />

