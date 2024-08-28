import {useEffect, useState} from 'react';
import {getPlaylist, getTrack} from '../api/spotify.ts';
import {SpotifyPlaylist, SpotifyTrack} from '../types/spotify.types.ts';

export function useSpotify(accessToken: string) {
    const [track, setTrack] = useState<SpotifyTrack | null>(null);
    const [playlist, setPlaylist] = useState<SpotifyPlaylist | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const trackData = await getTrack('TRACK_ID', accessToken);
                setTrack(trackData);
                const playlistData = await getPlaylist('PLAYLIST_ID', accessToken);
                setPlaylist(playlistData);
            } catch (err) {
                setError(err as Error);
            }
        }

        fetchData();
    }, [accessToken]);

    return {track, playlist, error};
}