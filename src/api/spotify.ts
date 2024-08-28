import {SpotifyPlaylist, SpotifyTrack} from '../types/spotify.types.ts';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

async function fetchSpotifyApi(endpoint: string, accessToken: string) {
    const response = await fetch(`${SPOTIFY_API_BASE_URL}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (!response.ok) {
        throw new Error(`Spotify API error: ${response.statusText}`);
    }
    return response.json();
}

export async function getTrack(trackId: string, accessToken: string): Promise<SpotifyTrack> {
    return fetchSpotifyApi(`/tracks/${trackId}`, accessToken);
}

export async function getPlaylist(playlistId: string, accessToken: string): Promise<SpotifyPlaylist> {
    return fetchSpotifyApi(`/playlists/${playlistId}`, accessToken);
}