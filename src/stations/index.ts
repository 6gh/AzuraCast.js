import { Base } from "../base";
import {
  Api_NowPlaying_Station,
  Api_NowPlaying_StationFallback,
  Api_NowPlaying_StationFallbackDelete,
} from "./types";

export class AzuraCastStations extends Base {
  /**
   * Get all stations
   * @description Returns a list of stations.
   */
  public getAll(): Promise<Api_NowPlaying_Station[]> {
    return this._invoke<Api_NowPlaying_Station[]>("/stations", "get");
  }

  /**
   * Get a station by ID
   * @description Return information about a single station.
   * @param stationId The ID of the station to retrieve. Can be either a number or a string.
   */
  public get(stationId: string | number): Promise<Api_NowPlaying_Station> {
    return this._invoke<Api_NowPlaying_Station>(`/station/${stationId}`, "get");
  }

  /**
   * Get station fallback
   * @description Get the custom fallback track for a station.
   * @param stationId The ID of the station to retrieve the fallback for. Can be either a number or a string.
   */
  public getFallback(
    stationId: string | number
  ): Promise<Api_NowPlaying_StationFallback> {
    return this._invoke<Api_NowPlaying_StationFallback>(
      `/station/${stationId}/fallback`,
      "get"
    );
  }

  /**
   * Update station fallback
   * @description Update the custom fallback track for the station.
   * @param stationId The ID of the station to update the fallback for. Can be either a number or a string.
   * @notimplemented
   */
  public updateFallback() {
    throw new Error("Not implemented");
  }

  /**
   * Delete station fallback
   * @description Removes the custom fallback track for a station.
   * @param stationId The ID of the station to delete the fallback for. Can be either a number or a string.
   */
  public deleteFallback(stationId: string | number) {
    return this._invoke<Api_NowPlaying_StationFallbackDelete>(
      `/station/${stationId}/fallback`,
      "delete"
    );
  }
}
