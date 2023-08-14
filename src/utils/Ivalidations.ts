interface IValidation {
  secretKey: RegExp;
  publicKey: RegExp;
}
export const VALIDATIONS: IValidation = {
  secretKey: /^S[A-Za-z0-9]{55}$/i,
  publicKey: /^G[A-Za-z0-9]{55}$/i,
};
