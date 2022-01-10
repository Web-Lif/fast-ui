---
nav:
    title: Components
    path: /components
group:
    path: /components/data
    title: 数据
---

## DatePicker 日期选择框

输入或选择日期的控件。

<br />

例子:

<div class="fu-code-block-row">

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 基本
 * desc: 最简单的用法，在浮层中可以选择或者输入日期。
 */
import React, { useState, useRef } from 'react';
import { DatePicker } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <DatePicker
               onChange={(e) => {
                   console.log(e)
               }}
            />
        </>
    );
};
```

```tsx
/**
 * title: 定制日期单元格
 * desc: 使用 `dateRender` 可以自定义日期单元格的内容和样式。
 */
import React, { useState, useRef } from 'react';
import { DatePicker } from '@weblif/fast-ui';
import { getDate } from 'date-fns'

export default () => {
    return (
        <DatePicker
            dateRender={current => {
                const style = {};
                if (getDate(current) === 1) {
                    style.border = '1px solid #1890ff';
                    style.borderRadius = '50%';
                } 
                return (
                    <div className="ant-picker-cell-inner" style={style}>
                        {getDate(current)}
                    </div>
                );
            }}
        />
    );
};
```

</div>


<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 范围选择器
 * desc: 通过设置 `picker` 属性，指定范围选择器类型。
 */
import React, { useState, useRef } from 'react';
import { DatePicker } from '@weblif/fast-ui';

export default () => {
    return (
        <DatePicker.RangePicker
            onChange={(e) => {
                console.log(e)
            }}
        />
    );
};
```

</div>


</div>

<br />

### API

日期类组件包括以下五种形式。

- DatePicker
- DatePicker[picker="month"]
- DatePicker[picker="week"]
- DatePicker[picker="year"]
- DatePicker[picker="quarter"]
- RangePicker

国际化配置

默认配置为中文，如果你需要设置其他语言，推荐在入口处使用我们提供的国际化组件

如有特殊需求（仅修改单一组件的语言），请使用 locale 参数


```js
import locale from 'antd/es/date-picker/locale/zh_CN';

<DatePicker locale={locale} />;
```

```js
// 如果你需要设置其他语言，推荐在入口文件全局设置 locale
import locale from 'antd/lib/locale/zh_CN';

<ConfigProvider locale={locale}>
  <DatePicker />
</ConfigProvider>;
```

### 共同的 API

以下 API 为 DatePicker、 RangePicker 共享的 API。

| 属性                 | 说明                       | 类型      |  默认值
|----                 |----                       |----      |-------
|allowClear           |是否显示清除按钮              |`boolean` |true
|autoFocus            |自动获取焦点                  |`boolean` |false
|bordered             |是否有边框                    |`boolean` |true
|className            |选择器 className             |`string`   |-
|dateRender           |自定义日期单元格的内容          |`function(currentDate: Date, today: Date) => React.ReactNode` |-
|disabled             |禁用                         |`boolean` |false
|disabledDate         |不可选择的日期                 |`(currentDate: Date) => boolean`| -
|dropdownClassName    |额外的弹出日历 className        |`string`  |-
|getPopupContainer    |定义浮层的容器，默认为 body 上新建 div |`function(trigger)`|-
|inputReadOnly        |设置输入框为只读（避免在移动设备上打开虚拟键盘）|`boolean` |false
|locale               |国际化配置                      |`object` | -
|mode                 |日期面板的状态                   |`time` \| `date` \| `month` \| `year` \| `decade` | -
|nextIcon             |自定义下一个图标                 |`ReactNode` | -
|open                 |控制弹层是否展开                 |`boolean` | -
|panelRender          |自定义渲染面板                   |`(panelNode) => ReactNode` | -
|picker               |设置选择器类型                   |`date` \| `week` \| `month` \| `quarter` \| `year` | date
|placeholder          |输入框提示文字                   |`string` \| `[string, string]` | -
|popupStyle           |额外的弹出日历样式                |`CSSProperties` | `{}`
|prevIcon             |自定义上一个图标                  |`ReactNode` | -
|size                 |输入框大小，large 高度为 40px，small 为 24px，默认是 32px |`large` \| `middle` \| `small` | -
|style                |自定义输入框样式                   |`CSSProperties` | `{}`
|suffixIcon           |自定义的选择框后缀图标              |`ReactNode` | -
|superNextIcon        |自定义 << 切换图标                 |`ReactNode` | -
|superPrevIcon        |自定义 >> 切换图标                 |`ReactNode` | -
|onOpenChange         |弹出日历和关闭日历的回调            |`function(open)` | -
|onPanelChange        |日历面板切换的回调                 |`function(value, mode)` | -

### 共同的方法

| 名称                 | 描述                    
|----                 |----
|blur()               |移除焦点
|focus()              |获取焦点


### DatePicker

| 属性                 | 说明                                                                 | 类型      |  默认值
|----                 |----                                                                  |----      |-------
|defaultPickerValue   |默认面板日期                                                            |`Date`    | -
|defaultValue         |默认日期，如果开始时间或结束时间为 null 或者 undefined，日期范围将是一个开区间   |`Date`    | - 
|disabledTime         |不可选择的时间                                                           |`string` | -
|format               |设置日期格式，为数组时支持多格式匹配，展示以第一个为准                          |`string` \| `(value: moment) => string` \| `(string | (value: moment) => string)[]` | `yyyy-MM-dd`
|renderExtraFooter    |在面板中添加额外的页脚                                                    |`(mode) => React.ReactNode` | -
|showNow              |当设定了 showTime 的时候，面板是否显示"此刻"按钮                             |`boolean` | -
|showTime             |增加时间选择功能                                                          |`Object` \| `boolean`| `TimePicker Options`
|showTime.defaultValue|设置用户选择日期时默认的时分秒                                               |`Date`    | `Date`
|showToday            |是否展示"今天"按钮                                                         |`boolean` | `true`
|value                |日期                                                                     |`Date`    | -
|onChange             |时间发生变化的回调                                                          |`function(date: moment, dateString: string)` | -
|onOk                 |点击确定按钮的回调                                                         |`function()` | -
|onPanelChange        |	日期面板变化时的回调                                                       |`function(value, mode)` | -

### DatePicker[picker=year]

| 属性                 | 说明                                                                 | 类型      |  默认值
|----                 |----                                                                  |----      |-------
|defaultPickerValue   |默认面板日期                                                            |`Date`    |-
|defaultValue         |默认日期                                                                |`Date`    |-
|format               |展示的日期格式                                                          |`string`   |`yyyy`
|renderExtraFooter    |在面板中添加额外的页脚                                                   |`() => React.ReactNode`| -
|value                |日期                                                                  |`Date` | -
|onChange             |时间发生变化的回调，发生在用户选择时间时                                    |`function(date: Date, dateString: string)` | -

### DatePicker[picker=quarter]

| 属性                 | 说明                                                                 | 类型      |  默认值
|----                 |----                                                                  |----      |-------
|defaultPickerValue   |默认面板日期                                                           |`Date`
|defaultValue         |默认日期                     |`Date`
|format               |展示的日期格式 |`string`
|renderExtraFooter    |在面板中添加额外的页脚| `() => React.ReactNode`
|value                |日期 | `Date`
|onChange             |时间发生变化的回调，发生在用户选择时间时 |`function(date: Date, dateString: string)`


### DatePicker[picker=month]

| 属性                 | 说明                                                                 | 类型      |  默认值
|----                 |----                                                                  |----      |-------
|defaultPickerValue   |默认面板日期|`Date`
|defaultValue         |默认日期|`Date`
|format               |展示的日期格式|`string`
|monthCellRender      |自定义的月份内容渲染方法|`function(date, locale): ReactNode`
|renderExtraFooter    |在面板中添加额外的页脚|`	() => React.ReactNode`
|value                |日期|`Date`
|onChange             |时间发生变化的回调，发生在用户选择时间时|`function(date: Date, dateString: string)`

### DatePicker[picker=week]

| 属性                 | 说明                                                                 | 类型      |  默认值
|----                 |----                                                                  |----      |-------
|defaultPickerValue   |默认面板日期 |`Date`
|defaultValue         |默认日期 |`Date`
|format               |展示的日期格式 |`string`
|renderExtraFooter    |在面板中添加额外的页脚 |`(mode) => React.ReactNode`
|value                |日期 |`Date`
|onChange             |时间发生变化的回调，发生在用户选择时间时 |`function(date: Date, dateString: string)`

### RangePicker

| 属性                 | 说明                                                                 | 类型      |  默认值
|----                 |----                                                                  |----      |-------
|allowEmpty           |允许起始项部分为空     |`[boolean, boolean]`
|dateRender           |自定义日期单元格的内容  |`function(currentDate: Date, today: Date, info: { range: start \| end }) => React.ReactNode`
|defaultPickerValue   |默认面板日期          |`Date[]`
|defaultValue         |默认日期             |`Date[]`
|disabled             |禁用起始项            |`[boolean, boolean]`
|disabledTime         |不可选择的时间         |`function(date: Date, partial: start | end)`
|format               |展示的日期格式         |`string`
|ranges               |预设时间范围快捷选择    |`{ [range: string]: Date[] } | { [range: string]: () => Date[] }`
|renderExtraFooter    |在面板中添加额外的页脚  |`() => React.ReactNode`
|separator            |设置分隔符            |`React.ReactNode`
|showTime             |增加时间选择功能       |`Object` \| `boolean`
|showTime.defaultValue|设置用户选择日期时默认的时分秒 | `Date[]`
|value                |日期                  | `Date[]`
|onCalendarChange     |待选日期发生变化的回调   |`function(dates: [Date, Date], dateStrings: [string, string], info: { range:start|end })`
|onChange             |日期范围发生变化的回调   |`function(dates: [Date, Date], dateStrings: [string, string])`