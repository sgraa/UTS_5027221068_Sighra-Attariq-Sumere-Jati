import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CalendarServiceClient as _CalendarPackage_CalendarServiceClient, CalendarServiceDefinition as _CalendarPackage_CalendarServiceDefinition } from './CalendarPackage/CalendarService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  CalendarPackage: {
    CalendarService: SubtypeConstructor<typeof grpc.Client, _CalendarPackage_CalendarServiceClient> & { service: _CalendarPackage_CalendarServiceDefinition }
    Empty: MessageTypeDefinition
    Event: MessageTypeDefinition
    EventID: MessageTypeDefinition
    EventWithID: MessageTypeDefinition
    Events: MessageTypeDefinition
    Response: MessageTypeDefinition
  }
}

