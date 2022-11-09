// Original file: proto/clientService.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type {
  ClientRequest as _clientService_ClientRequest,
  ClientRequest__Output as _clientService_ClientRequest__Output,
} from '../clientService/ClientRequest';
import type {
  ClientResponse as _clientService_ClientResponse,
  ClientResponse__Output as _clientService_ClientResponse__Output,
} from '../clientService/ClientResponse';

export interface ClientServiceRoutesClient extends grpc.Client {
  client(
    argument: _clientService_ClientRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_clientService_ClientResponse__Output>
  ): grpc.ClientUnaryCall;
  client(
    argument: _clientService_ClientRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_clientService_ClientResponse__Output>
  ): grpc.ClientUnaryCall;
  client(
    argument: _clientService_ClientRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_clientService_ClientResponse__Output>
  ): grpc.ClientUnaryCall;
  client(
    argument: _clientService_ClientRequest,
    callback: grpc.requestCallback<_clientService_ClientResponse__Output>
  ): grpc.ClientUnaryCall;
  client(
    argument: _clientService_ClientRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_clientService_ClientResponse__Output>
  ): grpc.ClientUnaryCall;
  client(
    argument: _clientService_ClientRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_clientService_ClientResponse__Output>
  ): grpc.ClientUnaryCall;
  client(
    argument: _clientService_ClientRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_clientService_ClientResponse__Output>
  ): grpc.ClientUnaryCall;
  client(
    argument: _clientService_ClientRequest,
    callback: grpc.requestCallback<_clientService_ClientResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface ClientServiceRoutesHandlers
  extends grpc.UntypedServiceImplementation {
  client: grpc.handleUnaryCall<
    _clientService_ClientRequest__Output,
    _clientService_ClientResponse
  >;
}

export interface ClientServiceRoutesDefinition extends grpc.ServiceDefinition {
  client: MethodDefinition<
    _clientService_ClientRequest,
    _clientService_ClientResponse,
    _clientService_ClientRequest__Output,
    _clientService_ClientResponse__Output
  >;
}
