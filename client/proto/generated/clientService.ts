import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type {
  ClientServiceRoutesClient as _clientService_ClientServiceRoutesClient,
  ClientServiceRoutesDefinition as _clientService_ClientServiceRoutesDefinition,
} from './clientService/ClientServiceRoutes';

type SubtypeConstructor<
  Constructor extends new (...args: any) => any,
  Subtype
> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  clientService: {
    ClientRequest: MessageTypeDefinition;
    ClientResponse: MessageTypeDefinition;
    ClientServiceRoutes: SubtypeConstructor<
      typeof grpc.Client,
      _clientService_ClientServiceRoutesClient
    > & { service: _clientService_ClientServiceRoutesDefinition };
  };
}
