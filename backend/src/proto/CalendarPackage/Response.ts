// Original file: ../protobuf/calendar.proto

import type { Event as _CalendarPackage_Event, Event__Output as _CalendarPackage_Event__Output } from '../CalendarPackage/Event';

export interface Response {
  'code'?: (string);
  'message'?: (string);
  'event'?: (_CalendarPackage_Event | null);
}

export interface Response__Output {
  'code'?: (string);
  'message'?: (string);
  'event'?: (_CalendarPackage_Event__Output);
}
