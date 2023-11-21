import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
    const navigate = useNavigate();

    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    console.log("domain="+domain)
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    console.log("clientId="+clientId)
    const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
    console.log("redirectUri="+redirectUri)
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
    console.log("audience="+audience)

    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    if (!(domain && clientId && redirectUri && audience)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                audience: audience,
                redirect_uri: redirectUri,
                // scope: 'profile email read:users',
                // scope: 'openid profile email',
                scope: 'profile email read:admin-messages'
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};