/**
 * Now Playing Station API Response
 */
export interface Api_NowPlaying_Station {
  /**
   * Station ID
   * @type {number}
   * @example 1
   */
  id: number;
  /**
   * Station Name
   * @type {string}
   * @example "AzuraTest Radio"
   */
  name: string;
  /**
   * Station "short code", used for URL and folder paths
   * @type {string}
   * @example "azuratest_radio"
   */
  shortcode: string;
  /**
   * Station Description
   * @type {string}
   * @example "An AzuraCast station!"
   */
  description: string;
  /**
   * Which broadcasting software (frontend) the station uses
   * @type {string}
   * @example "shoutcast2"
   */
  frontend: string;
  /**
   * Which AutoDJ software (backend) the station uses
   * @type {string}
   * @example "liquidsoap"
   */
  backend: string;
  /**
   * The station's IANA time zone
   * @type {string}
   * @example "America/Chicago"
   */
  timezone: string;
  /**
   * The full URL to listen to the default mount of the station
   * @type {string}
   * @example "https://localhost:8000/radio.mp3"
   */
  listen_url: string;
  /**
   * The public URL of the station.
   * @type {string}
   * @example "https://localhost:8000/"
   */
  url: string;
  /**
   * The public player URL for the station.
   * @type {string}
   * @example "https://example.com/public/example_station"
   */
  public_player_url: string;
  /**
   * The playlist download URL in PLS format.
   * @type {string}
   * @example "https://example.com/public/example_station/playlist.pls"
   */
  playlist_pls_url: string;
  /**
   * The playlist download URL in M3U format.
   * @type {string}
   * @example "https://example.com/public/example_station/playlist.m3u"
   */
  playlist_m3u_url: string;
  /**
   * If the station is public (i.e. should be shown in listings of all stations)
   * @type {boolean}
   * @example true
   */
  is_public: boolean;
  mounts: Api_NowPlaying_StationMount[];
  remotes: Api_NowPlaying_StationRemote[];
  /**
   * If the station has HLS streaming enabled.
   * @type {boolean}
   * @example true
   */
  hls_enabled: boolean;
  /**
   * If the HLS stream should be the default one for the station.
   * @type {boolean}
   * @example true
   */
  hls_is_default: boolean;
  /**
   * The full URL to listen to the HLS stream for the station.
   * @type {string}
   * @example "https://example.com/hls/azuratest_radio/live.m3u8"
   */
  hls_url: string;
  /**
   * HLS Listeners
   * @type {number}
   * @example 0
   */
  hls_listeners: number;
}

export interface Api_NowPlaying_Listeners {
  /**
   * Total non-unique current listeners
   * @type {number}
   * @example 20
   */
  total: number;
  /**
   * Total unique current listeners
   * @type {number}
   * @example 15
   */
  unique: number;
  /**
   * Total non-unique current listeners (Legacy field, may be retired in the future.)
   * @type {number}
   * @example 20
   */
  current: number;
}

export interface Api_NowPlaying_StationRemote {
  /**
   * Mount/Remote ID number.
   * @type {number}
   * @example 1
   */
  id: number;
  /**
   * Mount point name/URL
   * @type {string}
   * @example "/radio.mp3"
   */
  name: string;
  /**
   * Full listening URL specific to this mount
   * @type {string}
   * @example "https://localhost:8000/radio.mp3"
   */
  url: string;
  /**
   * Bitrate (kbps) of the broadcasted audio (if known)
   * @type {number | null}
   * @example 128
   * @nullable
   */
  bitrate: number | null;
  /**
   * Audio encoding format of broadcasted audio (if known)
   * @type {string | null}
   * @example "mp3"
   * @nullable
   */
  format: string | null;
  listeners: Api_NowPlaying_Listeners;
}

export interface Api_NowPlaying_StationMount
  extends Api_NowPlaying_StationRemote {
  /**
   * The relative path that corresponds to this mount point
   * @type {string}
   * @example "/radio.mp3"
   */
  path: string;
  /**
   * If the mount is the default mount for the parent station
   * @type {boolean}
   * @example true
   */
  is_default: boolean;
}
