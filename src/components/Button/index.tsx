import { ReactElement } from 'react';
import styles from './styles.module.scss'

type Props = {
  onClick: () => void;
  children: ReactElement | string;
}

function Button({ onClick, children }: Props) {
  return <button className={styles.customButton} onClick={onClick}>{children}</button>
}

export default Button;