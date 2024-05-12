import { Event } from "../../proto/CalendarPackage/Event";
import { Events } from "../../proto/CalendarPackage/Events";
import { Response } from "../../proto/CalendarPackage/Response";
import { EventID } from "../../proto/CalendarPackage/EventID";
import { collections } from "./db.controller";
import { ObjectId } from "mongodb";
import { EventWithID } from "../../proto/CalendarPackage/EventWithID";

export class EventServerController {
    static async getAll(): Promise<Events | undefined> {
        try {
            const eventsDocs = await collections.events?.find().toArray();
            const eventsData = (eventsDocs as unknown) as Event[];
            let events: Events = {
                events: [],
            };
            eventsData.forEach((event) => {
                events.events?.push({
                    date: event.date,
                    desc: event.desc
                });
            });
            return events;
        } catch (err) {
            console.error("Error in getAll : \n", err);
        }
    }

    static async createEvent(event: Event): Promise<Response | undefined> {
        try {
            const res = await collections.events?.insertOne(event);
            if (res) {
                const _res: Response = {
                    code: '201',
                    message: "Success creating new Event",
                    event: {
                        date: event.date,
                        desc: event.desc
                    }
                };
                return _res;
            } else {
                const _res: Response = {
                    message: "Error when creating new Event",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in create event : \n", err);
        }
    }

    static async updateEvent(event: EventWithID): Promise<Response | undefined> {
        try {
            const res = await collections.events?.updateOne(
                {
                    _id: new ObjectId(event.eventId?.id),
                },
                {
                    $set: event.event,
                }
            );
            if (res) {
                const _res: Response = {
                    code: '200',
                    message: "Success updating new event",
                    event: {
                        date: event.event?.date,
                        desc: event.event?.desc
                    }
                };
                return _res;
            } else {
                const _res: Response = {
                    message: "Error when updating new event",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in update event : \n", err);
        }
    }

    static async deleteEvent(eventId: EventID): Promise<Response | undefined> {
        try {
            const res = await collections.events?.deleteOne({
                _id: new ObjectId(eventId.id),
            });
            if (res) {
                const _res: Response = {
                    code: '200',
                    message: "Success deleting new event",
                    event: null
                };
                return _res;
            } else {
                const _res: Response = {
                    message: "Error when deleting new event",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in delete event : \n", err);
        }
    }
}
