import { useState } from "react";

type ValidatorFn = (value: string) => string;

export const useFormInput = (
  initialValue: string,
  validateFn: ValidatorFn
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const onChange = (text: string) => {
    setValue(text);
    const validationError = validateFn(text);
    setError(validationError);
  };

  return {
    value,
    error,
    isFocused,
    setIsFocused,
    onChange,
    setError,
  };
};
