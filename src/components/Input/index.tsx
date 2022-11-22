import { UseFormRegisterReturn } from "react-hook-form";
import { InputContainer, InputLabelContainer, InputLabelRightMessage } from "./styles";

interface InputProps {
  register: UseFormRegisterReturn;
}

export function Input({
  register
}: InputProps) {
  return (
    <InputLabelContainer>
      <InputContainer placeholder="Label" {...register}/>
      { !register.required && <InputLabelRightMessage>Optional</InputLabelRightMessage> }
    </InputLabelContainer>
  );
}