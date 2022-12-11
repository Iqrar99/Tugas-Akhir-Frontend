import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #34495e;
  margin: 0;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #ecf0f1;
  text-align: center;
  padding-left: 30px;
  margin-left: 30px;
  p {
    vertical-align: middle;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding-right: 50px;
  margin-top: 8px;

  p {
    cursor: pointer;
  }
`;
