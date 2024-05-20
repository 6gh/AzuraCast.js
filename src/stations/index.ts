import { Base } from "../base";
import { Api_NowPlaying_Station } from "./types";

export class AzuraCastStations extends Base {
  /**
   * Get all stations.
   * @description Finds all stations on the AzuraCast instance.
   */
  public getAll(): Promise<Api_NowPlaying_Station[]> {
    return this._invoke<Api_NowPlaying_Station[]>("/stations", "get");
  }
}
