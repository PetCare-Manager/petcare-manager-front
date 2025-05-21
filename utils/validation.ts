export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): string => {
  if (password.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres.";
  }
  if (!/[A-Z]/.test(password)) {
    return "La contraseña debe incluir al menos una mayúscula.";
  }
  if (!/[0-9]/.test(password)) {
    return "La contraseña debe incluir al menos un número.";
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
    return "La contraseña debe incluir al menos un símbolo (ej. .,-!_).";
  }
  return ""; 
};