// src/hooks/useSpotifyAuth.ts
import {useEffect} from 'react';
import {useLocalStorage} from "./useLocalStorage.ts";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const RESPONSE_TYPE = 'code';
const SCOPES = 'user-read-private user-read-email user-read-currently-playing';

export function useSpotifyAuth() {

    const [accessToken, setAccessToken] = useLocalStorage('accessToken', undefined);

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');
        if (code && !accessToken) {
            fetchAccessToken(code);
        }
    }, []);

    const fetchAccessToken = async (code: string) => {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirect_uri: REDIRECT_URI
            })
        });

        if (!response.ok) {
            throw new Error(`Error fetching access token: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        setAccessToken(data.access_token);
        window.history.pushState({}, '', REDIRECT_URI); // Remove the code from the URL
    };

    const login = () => {
        const authURL = new URL(AUTH_ENDPOINT);
        const params = {
            response_type: RESPONSE_TYPE,
            client_id: CLIENT_ID,
            scope: SCOPES,
            redirect_uri: REDIRECT_URI,
        };
        authURL.search = new URLSearchParams(params).toString();
        window.location.href = authURL.toString();
    };

    return {accessToken, login};
}