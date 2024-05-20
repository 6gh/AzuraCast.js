import { Base } from "../base";
import { AzuraCastStations } from "../stations";

export class AzuraCastClient extends Base {
  public Stations = new AzuraCastStations({
    apiUrl: this._apiUrl,
    apiKey: this._apiKey,
  });
}
