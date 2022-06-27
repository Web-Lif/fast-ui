/**
 * title: 基本使用
 * desc: 基础用法信息
 */
import React, { useState } from 'react'
import { AutoComplete } from '@weblif/fast-ui'

const { Option } = AutoComplete

const SimpleAutoComplete = () => {
    const [result, setResult] = useState<string[]>([])

    const handleSearch = (value: string) => {
        let res: string[] = []
        if (!value || value.indexOf('@') >= 0) {
            res = []
        } else {
            res = ['gmail.com', '163.com', 'qq.com'].map(
                (domain) => `${value}@${domain}`
            )
        }
        setResult(res)
    }

    return (
        <AutoComplete
            style={{ width: 200 }}
            onSearch={handleSearch}
            placeholder="在此输入"
        >
            {result.map((email: string) => (
                <Option key={email} value={email}>
                    {email}
                </Option>
            ))}
        </AutoComplete>
    )
}
export default SimpleAutoComplete
