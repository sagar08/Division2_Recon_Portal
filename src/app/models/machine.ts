export interface Machine {
  CustomerId: number;
  MachineId: number;
  MachineNumber: string;
  MachineTypeSerial: string;
  Process: string;
  ProcessStartTime: Date;
  ProcessEndTime: Date;
  SensorData: null;
  Online: boolean;
  OnlineFrom: Date;
  OnlineTo: null;
}
