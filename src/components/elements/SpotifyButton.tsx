import {Button, ButtonProps} from "@headlessui/react";
import {IconBrandSpotifyFilled} from "@tabler/icons-react";
import {useSpotifyAuth} from "../../hooks/useSpotifyAuth.ts";

function SpotifyButton(props: ButtonProps) {

    const {login} = useSpotifyAuth();

    return (
        <Button
            {...props}
            onClick={login}
            className={"flex-nowrap bg-spotifyGreen border font-medium flex w-full  text-white rounded-xl items-center"}>
            <IconBrandSpotifyFilled className={"size-8 ml-4 m-2 shrink-0"}/>
            <span className={"flex-1 text-center"}>Sign in with Spotify</span>
        </Button>
    );
}

export default SpotifyButton;