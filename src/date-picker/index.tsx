import { css } from '@emotion/css';
import generatePicker, {
    PickerDateProps,
    PickerProps,
    RangePickerProps,
} from 'antd/es/date-picker/generatePicker';
import zhCN from 'antd/lib/locale/zh_CN';
import dateFnsGenerateConfig from 'rc-picker/es/generate/dateFns';
import React, { FC } from 'react';

const InternalDatePicker = generatePicker<Date>(dateFnsGenerateConfig);

function InternalDatePickerWrapper({ ...restProps }: PickerProps<Date>) {
    return (
        <InternalDatePicker
            className={css`
                width: 100%;
            `}
            locale={zhCN.DatePicker}
            {...restProps}
        />
    );
}

type InternalDatePickerType = typeof InternalDatePickerWrapper;

const RangePicker: FC<RangePickerProps<Date>> = ({ ...restProps }) => {
    return <InternalDatePicker.RangePicker locale={zhCN.DatePicker} {...restProps} />;
};

const WeekPicker: FC<PickerDateProps<Date>> = ({ ...restProps }) => {
    return <InternalDatePicker.WeekPicker locale={zhCN.DatePicker} {...restProps} />;
};

const MonthPicker: FC<PickerDateProps<Date>> = ({ ...restProps }) => {
    return <InternalDatePicker.MonthPicker locale={zhCN.DatePicker} {...restProps} />;
};

const YearPicker: FC<PickerDateProps<Date>> = ({ ...restProps }) => {
    return <InternalDatePicker.YearPicker locale={zhCN.DatePicker} {...restProps} />;
};

const TimePicker: FC<PickerDateProps<Date>> = ({ ...restProps }) => {
    return <InternalDatePicker.TimePicker locale={zhCN.DatePicker} {...restProps} />;
};

const QuarterPicker: FC<PickerDateProps<Date>> = ({ ...restProps }) => {
    return <InternalDatePicker.QuarterPicker locale={zhCN.DatePicker} {...restProps} />;
};

interface DatePickerInterface extends InternalDatePickerType {
    WeekPicker: typeof WeekPicker;
    MonthPicker: typeof MonthPicker;
    YearPicker: typeof YearPicker;
    RangePicker: typeof RangePicker;
    TimePicker: typeof TimePicker;
    QuarterPicker: typeof QuarterPicker;
}

const DatePicker = InternalDatePickerWrapper as DatePickerInterface;

DatePicker.WeekPicker = WeekPicker;
DatePicker.MonthPicker = MonthPicker;
DatePicker.YearPicker = YearPicker;
DatePicker.RangePicker = RangePicker;
DatePicker.TimePicker = TimePicker;
DatePicker.QuarterPicker = QuarterPicker;

export default DatePicker;
