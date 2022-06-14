import { CalendarProps as AntCalendarProps } from 'antd';
import generateCalendar from 'antd/es/calendar/generateCalendar';
import zhCN from 'antd/lib/locale/zh_CN';
import dateFnsGenerateConfig from 'rc-picker/es/generate/dateFns';
import React from 'react';

const InternalCalendar = generateCalendar<Date>(dateFnsGenerateConfig);

interface CalendarProps extends AntCalendarProps<Date> {}

export type { CalendarProps };
export { Calendar };

const Calendar = ({ locale = zhCN.DatePicker, ...restProps }: CalendarProps) => {
    return <InternalCalendar locale={locale} {...restProps} />;
};
