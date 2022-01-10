import React, { FC } from 'react';
import dateFnsGenerateConfig from 'rc-picker/es/generate/dateFns';
import generatePicker, { PickerProps } from 'antd/es/date-picker/generatePicker';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'antd/es/date-picker/style/index';

const InternalDatePicker = generatePicker<Date>(dateFnsGenerateConfig);

function DatePicker({
    ...restProps
}: PickerProps<Date>) {
    return <InternalDatePicker locale={locale} {...restProps} /> 
}
 
export default DatePicker;
