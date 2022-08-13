import Styled from 'styled-components';

export const ListWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 0 12px;
`;

export const Card = Styled.div`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 250px;
  img {
    max-width: 100%;
    /* max-height: 300px; */
    height: 200px;
    width: auto;
    padding-bottom: 12px;
    border-bottom: 1px solid #ccc;
  }
  h2 {
    font-weight: 600;
    &:hover {
      color: blue;
      cursor: pointer;
    }
  }
  .description {
    color: #888;
  }
  .price {
    font-weight: 600;
  }
`;