export interface Api_Song {
  id: string;
  text: string;
  artist: string | null;
  title: string | null;
  album: string | null;
  genre: string | null;
  isrc: string | null;
  lyrics: string | null;
  art: string | null;
  custom_fields: {
    [key: string]: string | null;
  };
}
