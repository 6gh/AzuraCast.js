import { Api_Song } from "../../song/types";

export interface Api_StationRequest {
  request_id: string;
  request_url: string;
  song: Api_Song;
}
