import React, {
  FunctionComponent,
  Fragment,
  useRef,
  useEffect,
  RefObject,
} from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import Romcal from 'romcal';

const Calendar: FunctionComponent = () => {
  const calendarRef: RefObject<FullCalendar> = useRef<FullCalendar>(null);

  useEffect(() => {
    const getDates = async () => {
      const dates = await Romcal.calendarFor();
      console.log(dates.map(date => `${date.key}: ${date.name}`));
    };
    getDates();
  });

  useEffect(() => {
    const calendarApi = calendarRef.current?.getApi();
    return () => {};
  }, [calendarRef]);

  return (
    <Fragment>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[bootstrapPlugin, listPlugin, dayGridPlugin]}
        ref={calendarRef}
      />
    </Fragment>
  );
};

export default Calendar;
