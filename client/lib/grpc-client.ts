import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './authService';
import path from 'path';

const PROTO_PATH = path.join(process.cwd(), './lib/authService.proto');

// suggested options for similarity to loading grpc.load behavior
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  defaults: true,
  oneofs: true,
});

const authService = (
  grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
).authService;

export const { AuthServiceRoutes, ClientServiceRoutes } = authService;
