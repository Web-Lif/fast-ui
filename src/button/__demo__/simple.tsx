/**
 * title: 执行耗时任务
 * desc: 执行耗时任务可以自动进行防止多次点击按钮, 当执行成功后才让继续点击
 */
import React from 'react'
import { Button } from '@weblif/fast-ui'

/** Mock 请求数据, 或则一些耗时操作 */
const requestData = () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('模拟任务执行完成.')
        }, 3000)
    })
}

export default () => {
    return (
        <Button
            onClick={async () => {
                const msg = await requestData()
                console.log(msg)
            }}
        >
            async 请求远程数据
        </Button>
    )
}
