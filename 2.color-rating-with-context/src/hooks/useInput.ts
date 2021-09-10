import { ChangeEvent, useState } from "react";

type UseInput = (initialValue: string) => {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

export const useInput: UseInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => setValue(initialValue);

  return {
    value,
    onChange,
    reset,
  };
};
