import { Timestamp } from "rxjs";

export interface User {
    Name:String;
    Surname:String;
    NickName:String;
    Email:String;
    Tel:String;
    Member: Boolean;
    Landing: Number;
    is_Share: Boolean;
    Status: String;
    Complete_Win: Number;
    Complete_Lose: Number;
    // Create_date: Timestamp;
    // Update_date: Timestamp;
    Token: Number;
  }

export interface Reward {
    // createDate: Timestamp;
    // usedDate: Timestamp;
    Status: String;
    // Owner: ...;
}