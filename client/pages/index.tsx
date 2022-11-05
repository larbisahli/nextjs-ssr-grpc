import type { NextPage } from 'next';
import type { GetServerSideProps } from 'next';
import { AuthService, ClientService } from '../core/grpc-service';

interface Props {
  result: {
    firstName: string;
    lastName: string;
    age: string;
  };
}

export default function Home({ result }: Props) {
  console.log('================>', { result });

  return <div className="container">{JSON.stringify(result)}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const authService = new AuthService();
    const result = await authService.loginClient('LARBI', 'pass-556');
    return {
      props: { result },
    };
  } catch (error) {
    return {
      props: { error },
    };
  }
};
