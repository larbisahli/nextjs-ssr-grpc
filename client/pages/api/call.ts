import client from '../../lib/grpc-client';

export default async function hi(req, res) {
  try {
    client.login(
      { username: 'LARBI', password: '55556-yay' },
      (error, notes) => {
        if (!error) {
          console.log('successfully fetch List notes');
          console.log(notes);
          return res.json({ notes });
        } else {
          console.error(error);
          return res.json({ error: 'noooooo' });
        }
      }
    );
  } catch (error) {
    console.error('[[[[[[[[', error);
    return res.json({ error: 'noooooo' });
  }
}
