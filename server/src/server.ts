import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './protos/authService';

const PROTO_PATH = './dist/protos/authService.proto';

/**
 * Suggested options for similarity to loading grpc.load behavior.
 */
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String, // JavaScript doesn't support long ints
  enums: String, // JavaScript doesn't support enum types
  defaults: true,
  oneofs: true,
});
const protoDescriptor = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

/**
 * Grab the authService package from the protobuf file.
 */
const authService = protoDescriptor.authService;

class AuthServer {
  login(username: string, password: string) {
    console.log(`Login for username>>`, { username, password });
    const oauthCredentials = {
      token: 'authToken-555656',
      timeoutSeconds: Math.floor(1000),
    };
    return oauthCredentials;
  }

  logout(authToken: string) {
    console.log(`Logout for token: '${authToken}'`);
    return { token: '', timeoutSeconds: 0 };
  }
}

const authServer = new AuthServer();

/**
 * Implements the login RPC method.
 */
const login = (
  call: any,
  callback: (arg0: any, arg1: { token: string; timeoutSeconds: number }) => void
) => {
  console.log(`Login function>> `);
  const authData = authServer.login(
    call.request.username,
    call.request.password
  );
  callback(null, authData);
};

/**
 * Implements the logout RPC method.
 */
const logout = (
  call: { request: { token: any } },
  callback: (arg0: any, arg1: { token: string; timeoutSeconds: number }) => void
) => {
  const authToken = call.request.token;
  console.log(`Logout function: '${authToken}'`);
  const authData = authServer.logout(authToken);
  callback(null, authData);
};

/**
 * Starts an RPC server that receives requests for the authService service at the
 * sample server port
 */
function main() {
  const server = new grpc.Server();
  server.addService(authService.AuthServiceRoutes.service, {
    login,
    logout,
  });
  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
  console.log('Starting gRPC server on port 0.0.0.0:50051...');
}

main();
