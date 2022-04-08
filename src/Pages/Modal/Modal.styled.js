import styled from 'styled-components';
import { theme } from '../../constants/Theme';

const {
  colors: { overlayColor },
} = theme;

export const Modal = styled.div`
  max-width: calc(100vw - 200px);
  max-height: calc(100vh - 50px);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${overlayColor};
  z-index: 100;
`;
