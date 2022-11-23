import { UseFormRegisterReturn } from "react-hook-form";
import { InputContainer, InputLabelContainer, InputLabelRightMessage } from "./styles";

interface InputProps {
  register: UseFormRegisterReturn;
  required?: boolean;
  placeholder?: string;
  labelClassName?: string;
}

export function Input({
  register,
  required = true,
  placeholder,
  labelClassName
}: InputProps) {
  return (
    <InputLabelContainer className={labelClassName}>
      <InputContainer placeholder={placeholder} {...register}/>
      { !required && <InputLabelRightMessage>Optional</InputLabelRightMessage> }
    </InputLabelContainer>
  );
}