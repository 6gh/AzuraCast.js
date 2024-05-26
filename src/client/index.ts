import { Base } from "../base";
import { AzuraCastStations } from "../stations/general";
import { AzuraCastNowPlaying } from "../nowplaying";
import { CustomFields } from "../admin/customFields";
import { SongRequests } from "../stations/requests";

export class AzuraCastClient extends Base {
  public Stations = new AzuraCastStations({
    apiUrl: this._apiUrl,
    apiKey: this._apiKey,
  });
  public NowPlaying = new AzuraCastNowPlaying({
    apiUrl: this._apiUrl,
    apiKey: this._apiKey,
  });
  public CustomFields = new CustomFields({
    apiUrl: this._apiUrl,
    apiKey: this._apiKey,
  });
  public SongRequests = new SongRequests({
    apiUrl: this._apiUrl,
    apiKey: this._apiKey,
  });
}
