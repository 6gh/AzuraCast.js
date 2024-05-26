import { Api_Song } from "../song/types";
import {
  Api_NowPlaying_Listeners,
  Api_NowPlaying_Station,
} from "../stations/general/types";

export interface Api_NowPlaying {
  station: Api_NowPlaying_Station;
  listeners: Api_NowPlaying_Listeners;
  live: Api_NowPlaying_Live;
  now_playing: Api_NowPlaying_CurrentSong | null;
  playing_next: Api_NowPlaying_StationQueue | null;
  song_history: Api_NowPlaying_SongHistory[];
  is_online: boolean;
  cache: "hit" | "database" | "station" | null;
}

export interface Api_NowPlaying_Live {
  is_live: boolean;
  streamer_name: string;
  broadcast_start: number | null;
  art: string | null;
}

export interface Api_NowPlaying_CurrentSong {
  sh_id: number;
  played_at: number;
  duration: number;
  playlist: string;
  streamer: string;
  is_request: boolean;
  song: Api_Song;
  elapsed: number;
  remaining: number;
}

export interface Api_NowPlaying_StationQueue {
  cued_at: number;
  played_at: number;
  duration: number;
  playlist: string;
  is_request: boolean;
  song: Api_Song;
}

export interface Api_NowPlaying_SongHistory {
  sh_id: number;
  played_at: number;
  duration: number;
  playlist: string;
  streamer: string;
  is_request: boolean;
  song: Api_Song;
}
