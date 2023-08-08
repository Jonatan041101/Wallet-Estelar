interface Validation {
  secretKey: RegExp;
}
export const VALIDATIONS: Validation = {
  secretKey: /^S[A-Za-z0-9]{55}$/i,
};
