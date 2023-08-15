export const getShortedPublicKey = (publicKey: string): string =>
  `${publicKey.slice(0, 3)}...${publicKey.slice(
    publicKey.length - 3,
    publicKey.length,
  )}`;
