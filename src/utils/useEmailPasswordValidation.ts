import { useState } from 'react';

interface ValidationErrors {
  email: boolean;
  password: boolean;
}

const useEmailPasswordValidation = () => {
  const [isError, setIsError] = useState<ValidationErrors>({ email: false, password: false });

  const validate = (email: string, password: string): boolean => {
    const isValidEmail = email.includes('@') && email.includes('.');
    const isValidPassword = password.length > 0;
    setIsError({ email: !isValidEmail, password: !isValidPassword });
    return isValidEmail && isValidPassword;
  };

  return { validate, isError };
};

export default useEmailPasswordValidation;
