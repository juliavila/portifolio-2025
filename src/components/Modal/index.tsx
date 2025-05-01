import { ReactElement } from 'react';
import styles from './styles.module.scss';

function Modal({ showModal = false, onCloseModal, children }: { showModal: boolean, onCloseModal: () => void, children: ReactElement }) {
  return <div
    className={styles.modal}
    show-modal={showModal.toString()}
  >
    <div
      className={styles.fog}
      onClick={onCloseModal}
    />
    <div className={styles.container}>
      {children}
    </div>
  </div >
}

export default Modal;