import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type {
  AuthServiceRoutesClient as _authService_AuthServiceRoutesClient,
  AuthServiceRoutesDefinition as _authService_AuthServiceRoutesDefinition,
} from './authService/AuthServiceRoutes';
import type {
  ClientServiceRoutesClient as _authService_ClientServiceRoutesClient,
  ClientServiceRoutesDefinition as _authService_ClientServiceRoutesDefinition,
} from './authService/ClientServiceRoutes';

type SubtypeConstructor<
  Constructor extends new (...args: any) => any,
  Subtype
> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  authService: {
    AccountCredentials: MessageTypeDefinition;
    AuthServiceRoutes: SubtypeConstructor<
      typeof grpc.Client,
      _authService_AuthServiceRoutesClient
    > & { service: _authService_AuthServiceRoutesDefinition };
    ClientInfo: MessageTypeDefinition;
    ClientServiceRoutes: SubtypeConstructor<
      typeof grpc.Client,
      _authService_ClientServiceRoutesClient
    > & { service: _authService_ClientServiceRoutesDefinition };
    OauthCredentials: MessageTypeDefinition;
  };
}
