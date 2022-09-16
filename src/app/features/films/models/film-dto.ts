export interface FilmDto {
  titre: string;
  annee: number;
  notation?: number;
}

export type EpisodeDto = {
  duration: number;
} & FilmDto;
