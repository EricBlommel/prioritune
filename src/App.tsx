import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useSpotifyAuth} from "./hooks/useSpotifyAuth.ts";
import HomePage from "./components/pages/HomePage.tsx";
import AuthenticationPage from "./components/pages/AuthenticationPage.tsx";

function App() {

    const {accessToken} = useSpotifyAuth();

    if (!accessToken && window.location.pathname !== '/auth') {
        console.log(accessToken);
        // Redirect to the login page
        window.location.href = '/auth';
    } else {
        console.log(accessToken);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/callback" element={<HomePage/>}/>
                <Route path="/auth" element={<AuthenticationPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
