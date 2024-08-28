export interface SpotifyTrack {
    id: string;
    name: string;
    album: {
        id: string;
        name: string;
        images: Array<{ url: string }>;
    };
    artists: Array<{ id: string; name: string }>;
}

export interface SpotifyPlaylist {
    id: string;
    name: string;
    tracks: {
        items: Array<{ track: SpotifyTrack }>;
    };
}
