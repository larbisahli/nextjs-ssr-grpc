import { ClientServiceRoutes } from '../lib/grpc-client';
import { promisify } from 'util';
import * as grpc from '@grpc/grpc-js';

const target = 'localhost:50051';

export class ClientService extends ClientServiceRoutes {
  constructor() {
    super(target, grpc.credentials.createInsecure());
  }

  public async getClient(id: number) {
    const clientInfo = promisify(this.client).bind(this);
    return await clientInfo({ id })
      .then((client) => ({ client, error: null }))
      .catch((error) => ({ error, client: null }));
  }
}
