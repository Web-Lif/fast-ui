import React, { FC } from 'react';
import dateFnsGenerateConfig from 'rc-picker/es/generate/dateFns';
import generatePicker, { PickerDateProps, PickerProps, RangePickerProps } from 'antd/es/date-picker/generatePicker';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'antd/es/date-picker/style/index';

const InternalDatePicker = generatePicker<Date>(dateFnsGenerateConfig);

function InternalDatePickerWrapper({
    ...restProps
}: PickerProps<Date>) {
    return <InternalDatePicker locale={locale} {...restProps} /> 
}

type InternalDatePickerType = typeof InternalDatePickerWrapper;


const RangePicker: FC<RangePickerProps<Date>> = ({
    ...restProps
}) => {
    return <InternalDatePicker.RangePicker locale={locale} {...restProps}/>
}

const WeekPicker: FC<PickerDateProps<Date>> = ({
    ...restProps
}) => {
    return <InternalDatePicker.WeekPicker locale={locale} {...restProps}/>
}

const MonthPicker: FC<PickerDateProps<Date>> = ({
    ...restProps
}) => {
    return <InternalDatePicker.MonthPicker locale={locale} {...restProps}/>
}

const YearPicker: FC<PickerDateProps<Date>> = ({
    ...restProps
}) => {
    return <InternalDatePicker.YearPicker locale={locale} {...restProps}/>
}

const TimePicker: FC<PickerDateProps<Date>> = ({
    ...restProps
}) => {
    return <InternalDatePicker.TimePicker locale={locale} {...restProps}/>
}

const QuarterPicker: FC<PickerDateProps<Date>> = ({
    ...restProps
}) => {
    return <InternalDatePicker.QuarterPicker locale={locale} {...restProps}/>
}

interface DatePickerInterface extends InternalDatePickerType {
    WeekPicker: typeof WeekPicker,
    MonthPicker: typeof MonthPicker,
    YearPicker: typeof YearPicker,
    RangePicker: typeof RangePicker,
    TimePicker: typeof TimePicker,
    QuarterPicker: typeof QuarterPicker
}

const DatePicker = InternalDatePickerWrapper as DatePickerInterface;

DatePicker.WeekPicker = WeekPicker
DatePicker.MonthPicker = MonthPicker
DatePicker.YearPicker = YearPicker
DatePicker.RangePicker = RangePicker
DatePicker.TimePicker = TimePicker
DatePicker.QuarterPicker = QuarterPicker

 
export default DatePicker;
