export interface DataResponse{
    caracters: ApiResponse<Character[]>;
    episodes: ApiResponse<Episode[]>;
}

export interface ApiResponse<T>{
  results: T;
}

export interface Episode{
    name: string;
    episode: string;
}

export interface Character{
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    isFavorite?: boolean;

}