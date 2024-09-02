import './App.css'
import {BrowserRouter, redirect, Route, Routes} from "react-router-dom";
import {useSpotifyAuth} from "./hooks/useSpotifyAuth.ts";
import HomePage from "./components/pages/HomePage.tsx";
import AuthenticationPage from "./components/pages/AuthenticationPage.tsx";
import {useEffect} from "react";
import QueuePage from "./components/pages/Queue/QueuePage.tsx";

function App() {

    const {accessToken} = useSpotifyAuth();

    useEffect(() => {
        if (!accessToken && window.location.pathname !== '/auth') {
            redirect(new URL('/auth', window.location.origin).toString());
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/callback" element={<HomePage/>}/>
                <Route path="/auth" element={<AuthenticationPage/>}/>
                <Route path="/queue" element={<QueuePage/>}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
