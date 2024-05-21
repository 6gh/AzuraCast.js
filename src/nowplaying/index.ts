import { Base } from "../base";
import { Api_NowPlaying } from "./types";

export class AzuraCastNowPlaying extends Base {
  /**
   * Get all now playing status
   * @description Returns a full summary of all stations' current state.
   */
  public getAll(): Promise<Api_NowPlaying[]> {
    return this._invoke<Api_NowPlaying[]>("/nowplaying", "get");
  }

  /**
   * Get a station now playing status by ID
   * @description Returns a full summary of the specified station's current state.
   * @param stationId The ID of the station to retrieve. Can be either a number or a string.
   */
  public get(stationId: string | number): Promise<Api_NowPlaying> {
    return this._invoke<Api_NowPlaying>(`/nowplaying/${stationId}`, "get");
  }
}
