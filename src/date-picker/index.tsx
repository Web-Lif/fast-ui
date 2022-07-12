import generatePicker, {
    PickerDateProps,
    PickerProps,
    RangePickerProps,
} from 'antd/es/date-picker/generatePicker'
import { Dayjs } from 'dayjs'
import dayJSGenerateConfig from 'rc-picker/es/generate/dayjs'
import React, { FC } from 'react'

const InternalDatePicker = generatePicker<Dayjs>(dayJSGenerateConfig)

function InternalDatePickerWrapper({ ...restProps }: PickerProps<Dayjs>) {
    return <InternalDatePicker {...restProps} />
}

type InternalDatePickerType = typeof InternalDatePickerWrapper

const RangePicker: FC<RangePickerProps<Dayjs>> = ({ ...restProps }) => {
    return <InternalDatePicker.RangePicker {...restProps} />
}

const WeekPicker: FC<PickerDateProps<Dayjs>> = ({ ...restProps }) => {
    return <InternalDatePicker.WeekPicker {...restProps} />
}

const MonthPicker: FC<PickerDateProps<Dayjs>> = ({ ...restProps }) => {
    return <InternalDatePicker.MonthPicker {...restProps} />
}

const YearPicker: FC<PickerDateProps<Dayjs>> = ({ ...restProps }) => {
    return <InternalDatePicker.YearPicker {...restProps} />
}

const TimePicker: FC<PickerDateProps<Dayjs>> = ({ ...restProps }) => {
    return <InternalDatePicker.TimePicker {...restProps} />
}

const QuarterPicker: FC<PickerDateProps<Dayjs>> = ({ ...restProps }) => {
    return <InternalDatePicker {...restProps} />
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
