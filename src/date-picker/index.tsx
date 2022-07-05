import { css } from '@emotion/css'
import generatePicker, {
    PickerDateProps,
    PickerProps,
    RangePickerProps,
} from 'antd/es/date-picker/generatePicker'
import zhCN from 'antd/lib/locale/zh_CN'
import { Dayjs } from 'dayjs'
import dayJSGenerateConfig from 'rc-picker/es/generate/dayjs'
import React, { FC } from 'react'

const InternalDatePicker = generatePicker<Dayjs>(dayJSGenerateConfig)

function InternalDatePickerWrapper({ ...restProps }: PickerProps<Dayjs>) {
    return (
        <InternalDatePicker
            className={css`
                width: 100%;
            `}
            locale={zhCN.DatePicker}
            {...restProps}
        />
    )
}

type InternalDatePickerType = typeof InternalDatePickerWrapper

const RangePicker: FC<RangePickerProps<Dayjs>> = ({ ...restProps }) => {
    return (
        <InternalDatePicker.RangePicker
            locale={zhCN.DatePicker}
            {...restProps}
        />
    )
}

const WeekPicker: FC<PickerDateProps<Dayjs>> = ({ ...restProps }) => {
    return (
        <InternalDatePicker.WeekPicker
            locale={zhCN.DatePicker}
            {...restProps}
        />
    )
}

const MonthPicker: FC<PickerDateProps<Dayjs>> = ({ ...restProps }) => {
    return (
        <InternalDatePicker.MonthPicker
            locale={zhCN.DatePicker}
            {...restProps}
        />
    )
}

const YearPicker: FC<PickerDateProps<Dayjs>> = ({ ...restProps }) => {
    return (
        <InternalDatePicker.YearPicker
            locale={zhCN.DatePicker}
            {...restProps}
        />
    )
}

const TimePicker: FC<PickerDateProps<Dayjs>> = ({ ...restProps }) => {
    return (
        <InternalDatePicker.TimePicker
            locale={zhCN.DatePicker}
            {...restProps}
        />
    )
}

const QuarterPicker: FC<PickerDateProps<Dayjs>> = ({ ...restProps }) => {
    return (
        <InternalDatePicker.QuarterPicker
            locale={zhCN.DatePicker}
            {...restProps}
        />
    )
}

interface DatePickerInterface extends InternalDatePickerType {
    WeekPicker: typeof WeekPicker
    MonthPicker: typeof MonthPicker
    YearPicker: typeof YearPicker
    RangePicker: typeof RangePicker
    TimePicker: typeof TimePicker
    QuarterPicker: typeof QuarterPicker
}

const DatePicker = InternalDatePickerWrapper as DatePickerInterface

DatePicker.WeekPicker = WeekPicker
DatePicker.MonthPicker = MonthPicker
DatePicker.YearPicker = YearPicker
DatePicker.RangePicker = RangePicker
DatePicker.TimePicker = TimePicker
DatePicker.QuarterPicker = QuarterPicker

export default DatePicker
