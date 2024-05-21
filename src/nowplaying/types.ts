import {
  Api_NowPlaying_Listeners,
  Api_NowPlaying_Station,
} from "../stations/types";

export interface Api_NowPlaying {
  station: Api_NowPlaying_Station;
  listeners: Api_NowPlaying_Listeners;
  // live: Api_NowPlaying_Live;
  // TODO: Make this its own type
  now_playing: {
    sh_id: number;
    played_at: number;
    duration: number;
    playlist: number;
    streamer: string;
    is_request: boolean;
    // TODO: Make this its own type
    song: {
      id: string;
      text: string;
      artist: string | null;
      title: string | null;
      album: string | null;
      genre: string | null;
      isrc: string | null;
      lyrics: string | null;
      art: {
        description: string;
      };
      custom_fields: string[];
    };
    elapsed: number;
    remaining: number;
  } | null;
  // playing_next:
  // song_history:
  is_online: boolean;
  cache: string;
}
