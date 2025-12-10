import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {GoogleOAuthProvider} from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GoogleOAuthProvider clientId="951752987628-32capvkp3v2u38lrdnjn5ak1aj8egp1f.apps.googleusercontent.com">
            <App/>
        </GoogleOAuthProvider>
    </StrictMode>,
)
