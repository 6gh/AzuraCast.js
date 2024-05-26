import { Base } from "../../base";
import { Api_StationRequest } from "./types";

export class SongRequests extends Base {
  /**
   * Get all song able to be requested
   * @description Return a list of requestable songs..
   * @param stationId The ID of the station to retrieve requestable songs for.
   */
  public getRequestable(stationId: number): Promise<Api_StationRequest[]> {
    return this._invoke<Api_StationRequest[]>(
      `/station/${stationId}/requests`,
      "get"
    );
  }

  /**
   * Request a song
   * @description Request a song to be played on the specified station.
   * @param stationId The ID of the station to request the song on.
   * @param requestId The ID of the requestable song to request.
   */
  public request(stationId: number, requestId: string): Promise<unknown> {
    return this._invoke<unknown>(
      `/station/${stationId}/request/${requestId}`,
      "post"
    );
  }
}
