// Original file: /home/larbi/Desktop/Web/Projects/grpc-ssr-nextjs/server/src/protos/authService.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type {
  ClientInfo as _authService_ClientInfo,
  ClientInfo__Output as _authService_ClientInfo__Output,
} from '../authService/ClientInfo';
import type {
  OauthCredentials as _authService_OauthCredentials,
  OauthCredentials__Output as _authService_OauthCredentials__Output,
} from '../authService/OauthCredentials';

export interface ClientServiceRoutesClient extends grpc.Client {
  Client(
    argument: _authService_OauthCredentials,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_ClientInfo__Output>
  ): grpc.ClientUnaryCall;
  Client(
    argument: _authService_OauthCredentials,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_authService_ClientInfo__Output>
  ): grpc.ClientUnaryCall;
  Client(
    argument: _authService_OauthCredentials,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_ClientInfo__Output>
  ): grpc.ClientUnaryCall;
  Client(
    argument: _authService_OauthCredentials,
    callback: grpc.requestCallback<_authService_ClientInfo__Output>
  ): grpc.ClientUnaryCall;
  client(
    argument: _authService_OauthCredentials,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_ClientInfo__Output>
  ): grpc.ClientUnaryCall;
  client(
    argument: _authService_OauthCredentials,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_authService_ClientInfo__Output>
  ): grpc.ClientUnaryCall;
  client(
    argument: _authService_OauthCredentials,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_ClientInfo__Output>
  ): grpc.ClientUnaryCall;
  client(
    argument: _authService_OauthCredentials,
    callback: grpc.requestCallback<_authService_ClientInfo__Output>
  ): grpc.ClientUnaryCall;
}

export interface ClientServiceRoutesHandlers
  extends grpc.UntypedServiceImplementation {
  Client: grpc.handleUnaryCall<
    _authService_OauthCredentials__Output,
    _authService_ClientInfo
  >;
}

export interface ClientServiceRoutesDefinition extends grpc.ServiceDefinition {
  Client: MethodDefinition<
    _authService_OauthCredentials,
    _authService_ClientInfo,
    _authService_OauthCredentials__Output,
    _authService_ClientInfo__Output
  >;
}
