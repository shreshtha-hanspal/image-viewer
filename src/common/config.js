var Config = {
    "login": {
        "username": "admin",
        "password": "admin"
    },
    "auth": {
        "access-token": "IGQVJVMFlaRk40NHFKSWRBRWxwR0JQOUpER2NNX3JadV9la3hPVDZAhOEY2OWZACOVFLQV9ZATjR6X3JwRzBpeC04bDB4eFk0WU9QZAnRPWHU5X2ZAVS2RuWkVRdkhsTXpSTi1uUEtrWXQ4RlVwOXJ3ZADFTX0dUVlJzN2E1VTdv"
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