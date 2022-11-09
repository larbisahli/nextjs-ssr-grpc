// Original file: src/proto/clientService.proto

export interface ClientResponse {
  id?: number;
  firstName?: string;
  lastName?: string;
  age?: number;
  email?: string;
  active?: boolean;
}

export interface ClientResponse__Output {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  active: boolean;
}
