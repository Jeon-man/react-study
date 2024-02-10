import { Input } from "antd";
import * as S from "./Button.styled";
import * as T from "./Button.type";

const Button = ({ onClick }: T.ButtonProps) => {
  return (
    <S.ButtonWrapper>
      <Input type="button" onClick={onClick} />
    </S.ButtonWrapper>
  );
};

export default Button;
