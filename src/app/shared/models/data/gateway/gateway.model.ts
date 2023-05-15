import { Device } from "../device/device.model";

export interface Gateway {
    id: number;
    name: string;
    serialNumber: string;
    ipv4: string;
    devices: Device[];
}