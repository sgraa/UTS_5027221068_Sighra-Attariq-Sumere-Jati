// Original file: ../protobuf/calendar.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _CalendarPackage_Empty, Empty__Output as _CalendarPackage_Empty__Output } from '../CalendarPackage/Empty';
import type { Event as _CalendarPackage_Event, Event__Output as _CalendarPackage_Event__Output } from '../CalendarPackage/Event';
import type { EventID as _CalendarPackage_EventID, EventID__Output as _CalendarPackage_EventID__Output } from '../CalendarPackage/EventID';
import type { EventWithID as _CalendarPackage_EventWithID, EventWithID__Output as _CalendarPackage_EventWithID__Output } from '../CalendarPackage/EventWithID';
import type { Events as _CalendarPackage_Events, Events__Output as _CalendarPackage_Events__Output } from '../CalendarPackage/Events';
import type { Response as _CalendarPackage_Response, Response__Output as _CalendarPackage_Response__Output } from '../CalendarPackage/Response';

export interface CalendarServiceClient extends grpc.Client {
  AddEvent(argument: _CalendarPackage_Event, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  AddEvent(argument: _CalendarPackage_Event, metadata: grpc.Metadata, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  AddEvent(argument: _CalendarPackage_Event, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  AddEvent(argument: _CalendarPackage_Event, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  addEvent(argument: _CalendarPackage_Event, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  addEvent(argument: _CalendarPackage_Event, metadata: grpc.Metadata, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  addEvent(argument: _CalendarPackage_Event, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  addEvent(argument: _CalendarPackage_Event, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  
  DeleteEvent(argument: _CalendarPackage_EventID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteEvent(argument: _CalendarPackage_EventID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteEvent(argument: _CalendarPackage_EventID, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteEvent(argument: _CalendarPackage_EventID, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteEvent(argument: _CalendarPackage_EventID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteEvent(argument: _CalendarPackage_EventID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteEvent(argument: _CalendarPackage_EventID, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteEvent(argument: _CalendarPackage_EventID, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  
  GetAllEvents(argument: _CalendarPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Events__Output>): grpc.ClientUnaryCall;
  GetAllEvents(argument: _CalendarPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_CalendarPackage_Events__Output>): grpc.ClientUnaryCall;
  GetAllEvents(argument: _CalendarPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Events__Output>): grpc.ClientUnaryCall;
  GetAllEvents(argument: _CalendarPackage_Empty, callback: grpc.requestCallback<_CalendarPackage_Events__Output>): grpc.ClientUnaryCall;
  getAllEvents(argument: _CalendarPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Events__Output>): grpc.ClientUnaryCall;
  getAllEvents(argument: _CalendarPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_CalendarPackage_Events__Output>): grpc.ClientUnaryCall;
  getAllEvents(argument: _CalendarPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Events__Output>): grpc.ClientUnaryCall;
  getAllEvents(argument: _CalendarPackage_Empty, callback: grpc.requestCallback<_CalendarPackage_Events__Output>): grpc.ClientUnaryCall;
  
  GetEventByID(argument: _CalendarPackage_EventID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Event__Output>): grpc.ClientUnaryCall;
  GetEventByID(argument: _CalendarPackage_EventID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CalendarPackage_Event__Output>): grpc.ClientUnaryCall;
  GetEventByID(argument: _CalendarPackage_EventID, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Event__Output>): grpc.ClientUnaryCall;
  GetEventByID(argument: _CalendarPackage_EventID, callback: grpc.requestCallback<_CalendarPackage_Event__Output>): grpc.ClientUnaryCall;
  getEventById(argument: _CalendarPackage_EventID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Event__Output>): grpc.ClientUnaryCall;
  getEventById(argument: _CalendarPackage_EventID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CalendarPackage_Event__Output>): grpc.ClientUnaryCall;
  getEventById(argument: _CalendarPackage_EventID, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Event__Output>): grpc.ClientUnaryCall;
  getEventById(argument: _CalendarPackage_EventID, callback: grpc.requestCallback<_CalendarPackage_Event__Output>): grpc.ClientUnaryCall;
  
  UpdateEvent(argument: _CalendarPackage_EventWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateEvent(argument: _CalendarPackage_EventWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateEvent(argument: _CalendarPackage_EventWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateEvent(argument: _CalendarPackage_EventWithID, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  updateEvent(argument: _CalendarPackage_EventWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  updateEvent(argument: _CalendarPackage_EventWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  updateEvent(argument: _CalendarPackage_EventWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  updateEvent(argument: _CalendarPackage_EventWithID, callback: grpc.requestCallback<_CalendarPackage_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface CalendarServiceHandlers extends grpc.UntypedServiceImplementation {
  AddEvent: grpc.handleUnaryCall<_CalendarPackage_Event__Output, _CalendarPackage_Response>;
  
  DeleteEvent: grpc.handleUnaryCall<_CalendarPackage_EventID__Output, _CalendarPackage_Response>;
  
  GetAllEvents: grpc.handleUnaryCall<_CalendarPackage_Empty__Output, _CalendarPackage_Events>;
  
  GetEventByID: grpc.handleUnaryCall<_CalendarPackage_EventID__Output, _CalendarPackage_Event>;
  
  UpdateEvent: grpc.handleUnaryCall<_CalendarPackage_EventWithID__Output, _CalendarPackage_Response>;
  
}

export interface CalendarServiceDefinition extends grpc.ServiceDefinition {
  AddEvent: MethodDefinition<_CalendarPackage_Event, _CalendarPackage_Response, _CalendarPackage_Event__Output, _CalendarPackage_Response__Output>
  DeleteEvent: MethodDefinition<_CalendarPackage_EventID, _CalendarPackage_Response, _CalendarPackage_EventID__Output, _CalendarPackage_Response__Output>
  GetAllEvents: MethodDefinition<_CalendarPackage_Empty, _CalendarPackage_Events, _CalendarPackage_Empty__Output, _CalendarPackage_Events__Output>
  GetEventByID: MethodDefinition<_CalendarPackage_EventID, _CalendarPackage_Event, _CalendarPackage_EventID__Output, _CalendarPackage_Event__Output>
  UpdateEvent: MethodDefinition<_CalendarPackage_EventWithID, _CalendarPackage_Response, _CalendarPackage_EventWithID__Output, _CalendarPackage_Response__Output>
}
