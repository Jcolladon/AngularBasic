import { Time } from "@angular/common";

export interface Hospital {
    name: string;
    rooms: Room[];
}

export interface Services {
    id: string;
    code: string;
    description: string;
}

export abstract class Room {
    id!: number;
    code!: string;
    floor!: number;
    roomNumber!: number;

    constructor(id: number, code: string, floor: number, roomNumber: number) {
        this.id = id;
        this.code = code;
        this.floor = floor;
        this.roomNumber = floor*100+roomNumber;
    }
}

export class ICURoom extends Room {
    icuType!: ICU_TYPE;

    constructor(id: number, code: string, floor: number, roomNumber: number, icuType: ICU_TYPE) {
        super(id, code, floor, roomNumber);
        this.icuType = icuType;
    }
}

export class WaitingRoom extends Room {
    capacity!: number;

    constructor(id: number, code: string, floor: number, roomNumber: number, capacity: number) {
        super(id, code, floor, roomNumber);
        this.capacity = capacity;
    }
}

export class RegularRoom extends Room {
    beds!: number;
    constructor(id: number, code: string, floor: number, roomNumber: number, beds: number) {
        super(id, code, floor, roomNumber);
        this.beds = beds;
    }
}

export class ORRoom extends Room {
    startTime!: Time;
    endTime!: Time;

    constructor(id: number, code: string, floor: number, roomNumber: number, startTime: Time, endTime: Time) {
        super(id, code, floor, roomNumber);
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

export enum ICU_TYPE {
    NEONATAL = "Neonatal",
    PEDIATRIC = "Pediatric",
    ADULT = "Adult"
}

export function getTimeIn24HourFormat(time: Time): string {
    return String(time.hours).padStart(2, '0') + ":" + String(time.minutes).padStart(2, '0');
}


export function loadData() : Hospital {
    return {
        name: "Test Hospital",
        rooms: [
            new ICURoom(1, "ICU-1", 1, 1, ICU_TYPE.ADULT),
            new ORRoom(2, "OR-1", 1, 2, {hours: 8, minutes: 0}, {hours: 16, minutes: 0}),
            new RegularRoom(3, "REG-1", 1, 3, 2),
            new WaitingRoom(4, "WAIT-1", 1, 4, 10),
            new ICURoom(5, "ICU-2", 2, 1, ICU_TYPE.PEDIATRIC),
            new ORRoom(5, "OR-2", 2, 2, {hours: 8, minutes: 0}, {hours: 16, minutes: 0}),
            new RegularRoom(7, "REG-2", 2, 3, 2),
            new WaitingRoom(8, "WAIT-2", 2, 4, 10),
            new ICURoom(9, "ICU-3", 3, 1, ICU_TYPE.NEONATAL),
            new ORRoom(10, "OR-3", 3, 2, {hours: 8, minutes: 0}, {hours: 16, minutes: 0}),
            new RegularRoom(11, "REG-3", 3, 3, 2),
            new WaitingRoom(12, "WAIT-3", 3, 4, 10),
            new ICURoom(13, "ICU-4", 4, 1, ICU_TYPE.ADULT),
            new ORRoom(14, "OR-4", 4, 2, {hours: 8, minutes: 0}, {hours: 16, minutes: 0}),
            new RegularRoom(15, "REG-4", 4, 3, 2),
            new WaitingRoom(16, "WAIT-4", 4, 4, 10),
            new ICURoom(17, "ICU-5", 5, 1, ICU_TYPE.PEDIATRIC),
            new ORRoom(18, "OR-5", 5, 2, {hours: 8, minutes: 0}, {hours: 16, minutes: 0}),
            new RegularRoom(19, "REG-5", 5, 3, 2),
            new WaitingRoom(20, "WAIT-5", 5, 4, 10),
            new ICURoom(21, "ICU-6", 6, 1, ICU_TYPE.NEONATAL),
            new ORRoom(22, "OR-6", 6, 2, {hours: 8, minutes: 0}, {hours: 16, minutes: 0}),
            new RegularRoom(23, "REG-6", 6, 3, 2),
            new WaitingRoom(24, "WAIT-6", 6, 4, 10),
            new ICURoom(25, "ICU-7", 7, 1, ICU_TYPE.ADULT),
            new ORRoom(26, "OR-7", 7, 2, {hours: 8, minutes: 0}, {hours: 16, minutes: 0}),
            new RegularRoom(27, "REG-7", 7, 3, 2),
            new WaitingRoom(28, "WAIT-7", 7, 4, 10),
            new ICURoom(29, "ICU-8", 8, 1, ICU_TYPE.PEDIATRIC)
        ]
    }
}
