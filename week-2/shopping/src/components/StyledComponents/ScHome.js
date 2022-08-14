import Styled from 'styled-components';

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1450px;
  margin: 0 auto;
`;

/* export const GreenText = Styled.p`
  color: green;
`;
 */

export const Input = Styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:hover {
    box-shadow: -8px 2px 35px -3px rgba(0,0,0,0.75);
  }
`;

export const ToggleButton = Styled.button`
  background-color: green;
  padding: 12px;
  margin: 12px 0;
  color: white;
  border-radius: 4px;
  border:none;
  cursor: pointer;
  &.active {
    background-color: #aa4444;
  }
`;