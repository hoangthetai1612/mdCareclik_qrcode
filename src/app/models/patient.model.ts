export interface Patient {
  Avatar: string;
  FullName: string;
  Gender: string;
  DOB: Date;
  Phone: string;
  Email: string;
  Verified: boolean;
  Manufacture: string;
  ReceivedLocation: string;
  ListDose: [Dose]
}
export interface Dose{
  DoseTime: number;
  DoseDate: string;
}
