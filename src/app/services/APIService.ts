export interface AuthCredentialsInterface {
    userId: string; // TODO maybe more typey like a mongoid.
}

export interface RequestInterface {

}

export interface ResponseInterface {

}

export class NoAuthCredentials implements AuthCredentialsInterface {
    userId: string
}

export class UsernamePasswordCredentials implements AuthCredentialsInterface {
    userId: string;
    username: string;
    password: string;
}

export interface TransportLayerInterface<CredentialsType> {
    credentials: CredentialsType;

    authenticate(creds: CredentialsType)
    /* async */ makeRequest(req:RequestInterface) : ResponseInterface
}

export class LocalStorage implements TransportLayerInterface<NoAuthCredentials> {
    credentials: NoAuthCredentials;
    authenticate(creds: NoAuthCredentials) {

    }

    async makeRequest(req:RequestInterface) : Promise<ResponseInterface> {

        return 0
    }
}

export interface APIServiceInterface<AuthCredentialsType, TransportLayerInterface> {
    credentials: AuthCredentialsType;
    connect(credentials: AuthCredentialsInterface); // Connect into a service and authenticate
}