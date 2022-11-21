import { CalendarProps as AntCalendarProps } from 'antd/es/calendar'
import generateCalendar from 'antd/es/calendar/generateCalendar'
import dayJSGenerateConfig from 'rc-picker/es/generate/dayjs'
import { Dayjs } from 'dayjs'

const InternalCalendar = generateCalendar<Dayjs>(dayJSGenerateConfig)

interface CalendarProps extends AntCalendarProps<Dayjs> {}

export type { CalendarProps }

const Calendar = ({ ...restProps }: CalendarProps) => {
    return <InternalCalendar {...restProps} />
}

export default Calendar
