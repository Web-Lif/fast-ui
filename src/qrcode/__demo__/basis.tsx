/**
 * title: 基础
 * desc: 简单的生成一个二维码信息
 */

import React from 'react'
import { QRCode } from '@weblif/fast-ui'

export default () => {
    return <QRCode value="https://github.com/Web-Lif/fast-ui" />
}
