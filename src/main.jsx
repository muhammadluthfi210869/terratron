import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import posthog from 'posthog-js'
import App from './App.jsx'
import './index.css'

// Initialize PostHog
posthog.init('phc_ueq85MgCTVJ7ec9DuLSNosb2hBgCgsHEdnVxsHnnAXQg', {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'always', // or 'identified_only'
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
)
