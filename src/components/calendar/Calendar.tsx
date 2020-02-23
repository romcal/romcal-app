import React, {
  FunctionComponent,
  Fragment,
  useRef,
  useEffect,
  RefObject,
} from 'react';

import { Calendar as Romcal } from 'romcal';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';

const Calendar: FunctionComponent = () => {
  const calendarRef: RefObject<FullCalendar> = useRef<FullCalendar>(null);

  useEffect(() => {
    Romcal.calendarFor();
  }, []);

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
