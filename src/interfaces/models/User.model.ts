import { GenderEnums } from "enums";

export interface UserModel {
  id: string;
  picture: string;
  fullName: string;
  email: string;
  gender: GenderEnums;
  cell: string;
  phone: string;
  location: string;
  nat: string;
  isWinner: boolean;
  age: number;
  timesPlayed: number;
  time: string;
}
