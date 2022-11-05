// Original file: /home/larbi/Desktop/Web/Projects/grpc-ssr-nextjs/server/src/protos/authService.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type {
  AccountCredentials as _authService_AccountCredentials,
  AccountCredentials__Output as _authService_AccountCredentials__Output,
} from '../authService/AccountCredentials';
import type {
  OauthCredentials as _authService_OauthCredentials,
  OauthCredentials__Output as _authService_OauthCredentials__Output,
} from '../authService/OauthCredentials';

export interface AuthServiceRoutesClient extends grpc.Client {
  Login(
    argument: _authService_AccountCredentials,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  Login(
    argument: _authService_AccountCredentials,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  Login(
    argument: _authService_AccountCredentials,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  Login(
    argument: _authService_AccountCredentials,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  login(
    argument: _authService_AccountCredentials,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  login(
    argument: _authService_AccountCredentials,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  login(
    argument: _authService_AccountCredentials,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  login(
    argument: _authService_AccountCredentials,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;

  Logout(
    argument: _authService_OauthCredentials,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  Logout(
    argument: _authService_OauthCredentials,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  Logout(
    argument: _authService_OauthCredentials,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  Logout(
    argument: _authService_OauthCredentials,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  logout(
    argument: _authService_OauthCredentials,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  logout(
    argument: _authService_OauthCredentials,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  logout(
    argument: _authService_OauthCredentials,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
  logout(
    argument: _authService_OauthCredentials,
    callback: grpc.requestCallback<_authService_OauthCredentials__Output>
  ): grpc.ClientUnaryCall;
}

export interface AuthServiceRoutesHandlers
  extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<
    _authService_AccountCredentials__Output,
    _authService_OauthCredentials
  >;

  Logout: grpc.handleUnaryCall<
    _authService_OauthCredentials__Output,
    _authService_OauthCredentials
  >;
}

export interface AuthServiceRoutesDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<
    _authService_AccountCredentials,
    _authService_OauthCredentials,
    _authService_AccountCredentials__Output,
    _authService_OauthCredentials__Output
  >;
  Logout: MethodDefinition<
    _authService_OauthCredentials,
    _authService_OauthCredentials,
    _authService_OauthCredentials__Output,
    _authService_OauthCredentials__Output
  >;
}
