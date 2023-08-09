export const shortPublicKey = (publicKey: string): string =>
  `${publicKey.slice(0, 5)}...${publicKey.slice(
    publicKey.length - 5,
    publicKey.length,
  )}`;
