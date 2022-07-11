import React from 'react'
import { CalendarProps as AntCalendarProps } from 'antd/es/calendar'
import generateCalendar from 'antd/es/calendar/generateCalendar'
import zhCN from 'antd/lib/locale/zh_CN'
import dayJSGenerateConfig from 'rc-picker/es/generate/dayjs'
import { Dayjs } from 'dayjs'

const InternalCalendar = generateCalendar<Dayjs>(dayJSGenerateConfig)

interface CalendarProps extends AntCalendarProps<Dayjs> {}

export type { CalendarProps }
export { Calendar }

const Calendar = ({
    locale = zhCN.DatePicker,
    ...restProps
}: CalendarProps) => {
    return <InternalCalendar locale={locale} {...restProps} />
}
