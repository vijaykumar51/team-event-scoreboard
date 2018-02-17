import { Injectable } from "@angular/core";
import { AppDataModel } from "../models/app-data.model";

@Injectable()
export class DataStoreService implements AppDataModel {
  public teamSize: number;
  public teams: any;
  constructor() {}
}