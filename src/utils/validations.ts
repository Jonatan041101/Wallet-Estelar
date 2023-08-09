interface Validation {
  secretKey: RegExp;
  publicKey: RegExp;
}
export const VALIDATIONS: Validation = {
  secretKey: /^S[A-Za-z0-9]{55}$/i,
  publicKey: /^G[A-Za-z0-9]{55}$/i,
};
