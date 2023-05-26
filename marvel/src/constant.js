import { MD5 } from 'crypto-js';

export const publicKey = 'fd9492c3d31039d4d056ed08856e320d';
export const privateKey = '373416865b92a61ca17108f06774383d670c8935';
export const ts = Date.now();
export const hash = MD5(ts + privateKey + publicKey).toString();
