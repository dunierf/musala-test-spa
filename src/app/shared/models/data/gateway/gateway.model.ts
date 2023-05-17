import { Device } from "../device/device.model";

export interface Gateway {
    id: number | null;
    name: string;
    serialNumber: string;
    ipV4Address: string;
    devices: Device[];
}