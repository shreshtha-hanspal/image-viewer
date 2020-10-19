var Config = {
    "login": {
        "username": "admin",
        "password": "admin"
    },
    "auth": {
        "access-token": "IGQVJXZAU5KUGZA3ZAmQxalVNUjE4RVRDdW1JcnZAvd2RzOWplWThXeEd6dXRCa0k3bzRodmZAWLWMzSElxUldRTUU5T0FhNWlNbGNsX3dLVF9ZAN0xTMDhCeEFfbUo4NVVuYW5NSVp0SFpTT2p2c2ZArYlZArbQZDZD"
    },
    "api":
        {
            "mock": false,
            "endpoints":
                [
                    {
                        "name": "Get Posts",
                        "uri": "https://graph.instagram.com/me/media?fields=id,caption&access_token=$accessToken"
                    },
                    {
                        "name": "Get Post Details",
                        "uri": "https://graph.instagram.com/$postId?fields=id,media_type,media_url,username,timestamp&access_token=$accessToken"
                    }
                ]
        }
};
export default Config;