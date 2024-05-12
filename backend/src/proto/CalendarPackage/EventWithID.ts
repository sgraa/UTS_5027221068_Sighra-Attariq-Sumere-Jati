// Original file: ../protobuf/calendar.proto

import type { EventID as _CalendarPackage_EventID, EventID__Output as _CalendarPackage_EventID__Output } from '../CalendarPackage/EventID';
import type { Event as _CalendarPackage_Event, Event__Output as _CalendarPackage_Event__Output } from '../CalendarPackage/Event';

export interface EventWithID {
  'eventId'?: (_CalendarPackage_EventID | null);
  'event'?: (_CalendarPackage_Event | null);
}

export interface EventWithID__Output {
  'eventId'?: (_CalendarPackage_EventID__Output);
  'event'?: (_CalendarPackage_Event__Output);
}
