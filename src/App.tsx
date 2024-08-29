import './App.css'
import {useSpotify} from "./hooks/useSpotify.ts";
import SpotifyButton from "./components/elements/SpotifyButton.tsx";
import Card from "./components/elements/Card.tsx";
import Chip from "./components/elements/Chip.tsx";

function App() {

    const {track, playlist, error} = useSpotify(import.meta.env.REACT_APP_SPOTIFY_ACCESS_TOKEN);

    console.log(track, playlist, error);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Card>
                    <div className={"flex w-full justify-center items-center gap-2 mb-4"}>
                        <h1 className={"font-bold text-2xl"}>Prioritune</h1>
                        <Chip>beta</Chip>
                    </div>
                    <SpotifyButton/>
                </Card>
            </div>
        </div>
    )
}

export default App
