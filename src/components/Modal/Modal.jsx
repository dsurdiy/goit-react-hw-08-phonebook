import { createPortal } from 'react-dom';
import { Overlay, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  return createPortal(
    <Overlay>
      <Content>{children}</Content>
    </Overlay>,
    modalRoot
  );
};
