import { useState } from 'react';
import styles from './styles.module.scss';
import Modal from '../Modal';
import Button from '../Button';

function Header({ goToHome }: { goToHome: () => void }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  return <div className={styles.header}>
    <button className={styles.pic} onClick={goToHome}></button>
    <h3
      className={styles.title}
      onClick={() => setShowModal(true)}
    >
      Portifolio 2025
    </h3>


    <Modal onCloseModal={() => setShowModal(false)} showModal={showModal}>
      <div className={styles['modal-content']}>
        <p>next portfolio under development</p>
        <Button onClick={() => setShowModal(false)}>ok</Button>
      </div>
    </Modal>
  </div>
}

export default Header;