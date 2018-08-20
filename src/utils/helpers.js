export const validateEmail = value => /([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/.test(value);
export const validateRequired = value => value.length > 0;