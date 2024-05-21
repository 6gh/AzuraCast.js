import { Base } from "../base";
import { AzuraCastStations } from "../stations";
import { AzuraCastNowPlaying } from "../nowplaying";

export class AzuraCastClient extends Base {
  public Stations = new AzuraCastStations({
    apiUrl: this._apiUrl,
    apiKey: this._apiKey,
  });
  public NowPlaying = new AzuraCastNowPlaying({
    apiUrl: this._apiUrl,
    apiKey: this._apiKey,
  });
}
