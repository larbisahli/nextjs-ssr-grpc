## Next.js SSR using gRPC

We are going to use the following packages to build our application:

- Nextjs: Next.js is an open-source development framework built on top of Node.js enabling React based web applications.
- @grpc/grpc-js: gRPC Library for Node - pure JS implementation.
- @grpc/proto-loader: A utility package for loading .proto files for use with gRPC.

Generate the types:
```bash 
yarn proto-gen-types
```

Starting Nextjs server:
```bash
cd client
yarn dev
```

Starting grpc server:
```bash
cd server
yarn build
yarn dev
```