import { IBankData } from "./IBankData";

export interface IUserData {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  bankInformation: IBankData
}