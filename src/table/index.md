---
nav:
    title: 组件
    path: /components
group:
    path: /components/data
    title: 数据
---

## Table 表格

展示行列数据。

### 何时使用

-   当有大量结构化的数据需要展现时；
-   当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

> 注意: 固定列的功能在火狐浏览器中存在闪动的问题 (包括默认的头部固定)

例子:

```tsx
/**
 * title: 基础表格
 * desc: 基础的表格信息, 显示列和行, 可通过 `AutoSize` 来进行百分比的设置
 */
import React, { useState, useRef } from 'react';
import { Table, Button, Input, AutoSize, Space, message } from '@weblif/fast-ui';

/** Mock 数据 */
const mockData = () => {
    const data = [];
    for (let i = 0; i < 10; i += 1) {
        data.push({
            username: 'zhangj',
            email: 'zhang@xx.com',
            id: i,
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
    const [sortColumns, setSortColumns] = useState([]);
    const rowSelection = {
        model: modal === false ? 'single' : 'multiple',
    };

    return (
        <>
            <Space>
                <Button
                    onClick={() => {
                        setModal(!modal);
                    }}
                >
                    切换单选/多选
                </Button>
                <Button
                    onClick={() => {
                        alert(data.filter((ele) => ele.$state === 'update'));
                    }}
                >
                    获取修改的内容
                </Button>
            </Space>
            <br />
            <br />
            <AutoSize
                style={{
                    width: '100%',
                    height: 600,
                }}
            >
                {({ width, height }) => (
                    <Table
                        width={width}
                        height={height}
                        rowSelection={rowSelection}
                        rowKey="id"
                        mode="cell"
                        sortColumns={sortColumns}
                        onSortColumnsChange={setSortColumns}
                        columns={[
                            {
                                name: 'username',
                                title: '人员名称',
                                fixed: 'right',
                            },
                            {
                                name: 'email',
                                title: '邮箱地址',
                                editor: ({ onFinish, value, onChange }) => (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                        autoFocus
                                        onBlur={onFinish}
                                    />
                                ),
                            },
                            {
                                name: 'age',
                                title: '年龄',
                                editor: ({ onFinish, value, onChange }) => (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                        autoFocus
                                        onBlur={onFinish}
                                    />
                                ),
                            },
                            {
                                name: 'tags',
                                title: '标签',
                                editor: ({ onFinish, value, onChange }) => (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                        autoFocus
                                        onBlur={onFinish}
                                    />
                                ),
                            },
                            {
                                name: 'col0',
                                title: '标签',
                                editor: ({ onFinish, value, onChange }) => (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                        autoFocus
                                        onBlur={onFinish}
                                    />
                                ),
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
                )}
            </AutoSize>
        </>
    );
};
```

```tsx
/**
 * title: 大数据测试
 * desc: 显示表格1000条数据
 */
import React, { useState, useRef } from 'react';
import { Table, Button, Input, AutoSize, Space, message } from '@weblif/fast-ui';

/** Mock 数据 */
const mockData = () => {
    const data = [];
    for (let i = 0; i < 1000; i += 1) {
        data.push({
            username: 'zhangj',
            email: 'zhang@xx.com',
            id: i,
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
    const [sortColumns, setSortColumns] = useState([]);
    const rowSelection = {
        model: modal === false ? 'single' : 'multiple',
    };

    console.log(modal === false ? 'single' : 'multiple');

    return (
        <>
            <Space>
                <Button
                    onClick={() => {
                        setModal(!modal);
                    }}
                >
                    切换单选/多选
                </Button>
                <Button
                    onClick={() => {
                        alert(data.filter((ele) => ele.$state === 'update'));
                    }}
                >
                    获取修改的内容
                </Button>
            </Space>
            <br />
            <br />
            <AutoSize
                style={{
                    width: '100%',
                    height: 600,
                }}
            >
                {({ width, height }) => (
                    <Table
                        width={width}
                        height={height}
                        rowSelection={rowSelection}
                        rowKey="id"
                        mode="cell"
                        sortColumns={sortColumns}
                        onSortColumnsChange={setSortColumns}
                        columns={[
                            {
                                name: 'username',
                                title: '人员名称',
                                fixed: 'right',
                                allowCellSelectBorder: false,
                            },
                            {
                                name: 'email',
                                title: '邮箱地址',
                                editor: ({ onFinish, value, onChange }) => (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                        autoFocus
                                        onBlur={onFinish}
                                    />
                                ),
                            },
                            {
                                name: 'age',
                                title: '年龄',
                                editor: ({ onFinish, value, onChange }) => (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                        autoFocus
                                        onBlur={onFinish}
                                    />
                                ),
                            },
                            {
                                name: 'tags',
                                title: '标签',
                                editor: ({ onFinish, value, onChange }) => (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                        autoFocus
                                        onBlur={onFinish}
                                    />
                                ),
                            },
                            {
                                name: 'col0',
                                title: '标签',
                                editor: ({ onFinish, value, onChange }) => (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                        autoFocus
                                        onBlur={onFinish}
                                    />
                                ),
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
                )}
            </AutoSize>
        </>
    );
};
```

<br />

<API></API>

## Column

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段名称 | `string` | `必选` |
| title | 显示的标题 | `string` | `必选` |
| width | 列的宽度信息 | `number` | - |
| fixed | 固定列的方向 | `'left'` \| `'right'` | - |
| readOnly | 是否只读 | `boolean` | - |
| align | 列的对齐方式 | `{ header?: AlignType, body?: AlignType \| ((row: T) => AlignType) }` | - |
| editor | 编辑器 | `(renderType: EditRenderType<T>) => ReactElement` | - |
| render | 渲染单元格 | `(renderType: RenderType<T>) => ReactElement` |
