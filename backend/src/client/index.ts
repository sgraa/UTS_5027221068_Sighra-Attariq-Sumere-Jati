import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/calendar';
import path from 'path';
import { EventID } from '../proto/CalendarPackage/EventID';
import { Event } from '../proto/CalendarPackage/Event';
import express, { Request, Response } from 'express';
import { EventWithID } from '../proto/CalendarPackage/EventWithID';
import authCors from '../middleware/authCors';

const PROTO_PATH: string = "../../../protobuf/calendar.proto";
const PORT: number = 8000;
const portClient = 5001

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const protoBuf = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH), options);
const grpcObj = grpc.loadPackageDefinition(protoBuf) as unknown as ProtoGrpcType;

const client = new grpcObj.CalendarPackage.CalendarService(
    `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err: any) => {
    if (err) {
        console.error(err);
        return;
    }
    onClientReady();
});

const onClientReady = () => {
    console.log(`Server running on port ${PORT} & Client running on port ${portClient}`);
    const app = express();
    app.use(authCors)
    app.use(express.json());

    app.get('/events', (req: Request, res: Response) => {
        client.GetAllEvents({}, (err: any, _res: any) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(_res);
        });
    });

    app.post('/events', (req: Request, res: Response) => {
        const createInput: Event = req.body;
        const event: Event = createInput;
        client.AddEvent(event, (err: any, _res: any) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(_res);
        });
    });

    app.patch('/events/:id', (req: Request, res: Response) => {
        const event: EventWithID = {
            eventId: {
                id: req.params.id
            },
            event: req.body
        }

        client.updateEvent(event,
            (err: any, _res: any) => {
                if (err) {
                    console.error(err)
                    return
                }
                res.send(_res)
            }
        )
    })

    app.delete('/events/:id', (req: Request, res: Response) => {
        const eventID: EventID = { id: req.params.id };
        client.DeleteEvent(eventID, (err: any, _res: any) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(_res);
        });
    });

    app.listen(portClient, () => {
        console.log("Express is started");
    });
};
