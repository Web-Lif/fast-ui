import { format } from 'date-fns';
import holiday2007 from './2007';
import holiday2008 from './2008';
import holiday2009 from './2009';
import holiday2010 from './2010';
import holiday2011 from './2011';
import holiday2012 from './2012';
import holiday2013 from './2013';
import holiday2014 from './2014';
import holiday2015 from './2015';
import holiday2016 from './2016';
import holiday2017 from './2017';
import holiday2018 from './2018';
import holiday2019 from './2019';
import holiday2020 from './2020';
import holiday2021 from './2021';
import holiday2022 from './2022';

const holidays = {
    '2007': holiday2007,
    '2008': holiday2008,
    '2009': holiday2009,
    '2010': holiday2010,
    '2011': holiday2011,
    '2012': holiday2012,
    '2013': holiday2013,
    '2014': holiday2014,
    '2015': holiday2015,
    '2016': holiday2016,
    '2017': holiday2017,
    '2018': holiday2018,
    '2019': holiday2019,
    '2020': holiday2020,
    '2021': holiday2021,
    '2022': holiday2022,
};

export const getHolidayInformation = async (date: Date) => {
    const holiday = (holidays as any)[date.getFullYear()];
    let info;
    holiday?.days?.forEach((day: any) => {
        console.log(format(date, 'yyyy-MM-dd'), day.date);
        if (day.date && day.date === format(date, 'yyyy-MM-dd')) {
            info = day;
        }
    });
    return info;
};
