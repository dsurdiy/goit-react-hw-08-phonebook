import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
`;

export const ContactInfo = styled.a`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  margin-right: 40px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const DeleteBtn = styled.button`
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  border: none;
  background-color: #d37b7b;
  cursor: pointer;
  transition: all 250ms linear;

  :hover,
  :focus {
    background-color: #a33c2a;
    color: #ffffff;
  }
`;
