import styles from './styles.module.scss';

function Header({ goToHome }: { goToHome: () => void }) {
  return <div className={styles.header}>
    <div className={styles.pic} onClick={goToHome}></div>
    <h3
      className={styles.title}
      onClick={goToHome}
    >
      Portifolio ✿
    </h3>
  </div>
}

export default Header;