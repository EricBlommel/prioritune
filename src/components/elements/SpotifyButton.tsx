import {Button, ButtonProps} from "@headlessui/react";
import {IconBrandSpotifyFilled} from "@tabler/icons-react";

function SpotifyButton(props: ButtonProps) {
    return (
        <Button
            {...props}
            onClick={() => console.log("Sign in with Spotify")}
            className={"flex-nowrap bg-spotifyGreen border font-medium flex w-full  text-white rounded-xl items-center"}>
            <IconBrandSpotifyFilled className={"size-8 ml-4 m-2 shrink-0"}/>
            <span className={"flex-1 text-center"}>Sign in with Spotify</span>
        </Button>
    );
}

export default SpotifyButton;