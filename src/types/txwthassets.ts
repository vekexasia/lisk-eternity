export interface Tx {
  id: string;
  height: number,
  blockId: string,
  type: 0,
  timestamp: number,
  senderPublicKey: string;
  senderId: string;
  recipientId: string,
  recipientPublicKey: string,
  amount: string;
  fee: string;
  signature: string;
  signatures: string[];
  confirmations: number,
  asset: {
    data: string,
  }

}

