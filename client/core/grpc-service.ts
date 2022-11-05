import { AuthServiceRoutes, ClientServiceRoutes } from '../lib/grpc-client';
import { promisify } from 'util';
import * as grpc from '@grpc/grpc-js';

const target = 'localhost:50051';

export class AuthService extends AuthServiceRoutes {
  constructor() {
    super(target, grpc.credentials.createInsecure());
  }

  public async loginClient(username: string, password: string) {
    const login = promisify(this.Login).bind(this);
    return await login({ username, password })
      .then((data) => ({ data }))
      .catch((error) => ({ error }));
  }
}

export class ClientService extends ClientServiceRoutes {
  constructor() {
    super(target, grpc.credentials.createInsecure());
  }

  public async getClient(token: string) {
    const login = promisify(this.Client).bind(this);
    return await login({ token })
      .then((data) => ({ data }))
      .catch((error) => ({ error }));
  }
}
