import Card from "../elements/Card.tsx";
import Chip from "../elements/Chip.tsx";
import SpotifyButton from "../elements/SpotifyButton.tsx";

function AuthenticationPage() {
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
    );
}

export default AuthenticationPage;