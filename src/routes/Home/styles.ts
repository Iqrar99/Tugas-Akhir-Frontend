import { css } from "@emotion/react";
import styled  from "@emotion/styled";

export const MainContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const customButton = css`
  width: 200px;
  height: 50px;
`;