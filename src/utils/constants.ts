import lisk from 'lisk-elements';
import io from 'socket.io-client';

const node = 'https://node05.lisk.io';
export const constants = {
  apiClient: lisk.APIClient.createMainnetAPIClient(),
  node ,
  socket: io(node),
  liskAddress: '9735169894044482341L',
};

