import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
