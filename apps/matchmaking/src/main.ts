import { app } from './app/app.matchmaking';
import { AddressInfo } from 'net';
const server = app.listen(3334, 'localhost', () => {
  const { port, address } = server.address() as AddressInfo;
  console.log('Server listening on:', 'http://' + address + ':' + port);
});
