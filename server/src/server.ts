import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ClientRequest } from './proto/generated/clientService/ClientRequest';
import { ProtoGrpcType } from './proto/generated/clientService';
import { ClientResponse } from './proto/generated/clientService/ClientResponse';

const PROTO_PATH = './dist/proto/clientService.proto';

/**
 * Suggested options for similarity to loading grpc.load behavior.
 */
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  defaults: true,
  oneofs: true,
});
const protoDescriptor = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

/**
 * Grab the clientService package from the protobuf file.
 */
const clientService = protoDescriptor.clientService;

const clients = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'john.doe@gmail.com',
    active: true,
  },
  {
    id: 2,
    firstName: 'Alexander',
    lastName: 'Angel',
    age: 26,
    email: 'alexander.angel@gmail.com',
    active: true,
  },
];

class gRPC extends grpc.Server {
  constructor() {
    super();
    this.addService(clientService.ClientServiceRoutes.service, {
      client: this.getClient,
    });
  }

  /**
   * getClient request handler.
   */
  protected getClient(
    call: grpc.ServerUnaryCall<ClientRequest, ClientResponse>,
    callback: grpc.sendUnaryData<ClientResponse>
  ) {
    const id = call.request.id;
    const client = clients?.find((client) => client.id === id);
    callback(null, client);
  }
}

/**
 * Starts an RPC server that receives requests for the clientService service at the
 * sample server port
 */
function main() {
  const server = new gRPC();
  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    (error) => {
      // Start server
      server.start();
      // On error
      if (error) {
        console.error(error);
      } else {
        console.log('Starting gRPC server on port: 0.0.0.0:50051');
      }
    }
  );
}

main();
