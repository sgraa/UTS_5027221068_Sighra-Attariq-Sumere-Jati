import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/calendar'
import { CalendarServiceHandlers } from '../proto/CalendarPackage/CalendarService'
import { Empty } from '../proto/CalendarPackage/Empty'
import { Events } from '../proto/CalendarPackage/Events'
import { Event } from '../proto/CalendarPackage/Event'
import { databaseConnection } from './controller/db.controller'
import path from 'path'
import { EventServerController } from './controller/calendar.controller'
import { Response } from '../proto/CalendarPackage/Response'
import { EventWithID } from '../proto/CalendarPackage/EventWithID'
import { EventID } from '../proto/CalendarPackage/EventID'

const PROTO_PATH: string = "../../../protobuf/calendar.proto"
const PORT: number = 8000

const options: protoLoader.Options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
}

const protoBuf: protoLoader.PackageDefinition = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH), options)
const grpcObj: ProtoGrpcType = (grpc.loadPackageDefinition(protoBuf) as unknown) as ProtoGrpcType
const calendarService = grpcObj.CalendarPackage

const main = () => {
    databaseConnection().then(() => {
        const server = getServer()
        server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
            (err: Error | null, port: number) => {
                if (err) {
                    console.error(err.message)
                    return
                }
                console.log(`Server started on port ${port}`)

                server.start()
            }
        )
    })
}

const getServer = () => {
    const server: grpc.Server = new grpc.Server()
    server.addService(calendarService.CalendarService.service, {
        'GetAllEvents': (call: grpc.ServerUnaryCall<Empty, Events>, callback: grpc.sendUnaryData<Events>) => {
            console.log('Server success get all Data')
            EventServerController.getAll().then((events: Events | undefined) => {
                callback(null, events)
            })
        },
        'AddEvent': (call: grpc.ServerUnaryCall<Event, Response>, callback: grpc.sendUnaryData<Response>) => {
            const event = call.request
            console.log('Server success Create Data')
            EventServerController.createEvent(event).then((res: Response | undefined) => {
                callback(null, res)
            })
        },
        'UpdateEvent': (call: grpc.ServerUnaryCall<EventWithID, Response>, callback: grpc.sendUnaryData<Response>) => {
            const event = call.request
            console.log('Server succed get all Data')
            EventServerController.updateEvent(event).then((res: Response | undefined) => {
                callback(null, res)
            })
        },
        'DeleteEvent': (call: grpc.ServerUnaryCall<EventID, Response>, callback: grpc.sendUnaryData<Response>) => {
            const EventId = call.request
            EventServerController.deleteEvent(EventId).then((res: Response | undefined) => {
                callback(null, res)
            })
        }
    } as CalendarServiceHandlers)
    return server
}

main()