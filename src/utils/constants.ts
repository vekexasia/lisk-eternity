import lisk from 'lisk-elements';
import io from 'socket.io-client';

const node = 'https://node01.lisk.io';
export const constants = {
  apiClient: lisk.APIClient.createMainnetAPIClient(),
  node ,
  socket: io(node),
  liskAddress: '13355153680330262594L'
};

