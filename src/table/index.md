---
nav:
    title: Components
    path: /components
group:
    path: /components/data
    title: 数据
---

## Table 表格

```tsx
/**
 * title: 基础表格
 * desc: 基础的表格信息, 显示列和行
 */
import React, { useState, useRef } from 'react';
import { Table, Button } from '@weblif/fast-ui';
import { message, Input } from 'antd';
import 'antd/dist/antd.css';

/** Mock 数据 */
const mockData = () => {
    const data = [];
    for (let i = 0; i < 1000; i += 1) {
        data.push({
            username: 'zhangj',
            email: 'zhang@xx.com',
            age: '25',
            tags: '人类',
            col0: `col0 - ${i}`,
            col1: `col1 - ${i}`,
            col2: `col2 - ${i}`,
            col3: `col3 - ${i}`,
            col4: `col4 - ${i}`,
            col5: `col5 - ${i}`,
            col6: `col6 - ${i}`,
        });
    }
    return data;
};

export default () => {
    const [data, setData] = useState(mockData());
    const [modal, setModal] = useState(true);

    const rowSelection = {
        model: modal === false ? 'single' : 'multiple',
    };

    console.log(modal === false ? 'single' : 'multiple');

    return (
        <>
            <Button
                onClick={() => {
                    setModal(!modal);
                }}
            >
                切换单选/多选
            </Button>
            <br />
            <br />
            <Table
                width={1200}
                height={600}
                rowSelection={rowSelection}
                columns={[
                    {
                        name: 'username',
                        title: '人员名称',
                        fixed: 'right',
                    },
                    {
                        name: 'email',
                        title: '邮箱地址',
                    },
                    {
                        name: 'age',
                        title: '年龄',
                    },
                    {
                        name: 'tags',
                        title: '标签',
                    },
                    {
                        name: 'col0',
                        title: '标签',
                    },
                    {
                        name: 'col1',
                        title: '标签',
                    },
                    {
                        name: 'col2',
                        title: '标签',
                    },
                    {
                        name: 'col3',
                        title: '标签',
                    },
                    {
                        name: 'col4',
                        title: '标签',
                    },
                    {
                        name: 'col5',
                        title: '标签',
                    },
                    {
                        name: 'col6',
                        title: '标签',
                    },
                ]}
                rows={data}
                onChange={setData}
            />
        </>
    );
};
```

<br />

| 属性             | 说明                   | 类型                  | 默认值 |
| ---------------- | ---------------------- | --------------------- | ------ |
| width            | 表格的宽度             | `number`              | -      |
| height           | 表格的高度信息         | `number`              | -      |
| rows             | 表格的数据             | `T[]`                 | -      |
| columns          | 列信息                 | `Column<T>[]`         | -      |
| rowSelection     | 选择框的配置项         | `RowSelectType`       | -      |
| onRowClick       | 表格单击行触发的事件   | `(row: T) => void`    | -      |
| onRowDoubleClick | 表格双击行触发的事件   | `row: T) => void`     | -      |
| onChange         | 改变表格数据触发的事件 | `(rows: T[]) => void` | -      |
