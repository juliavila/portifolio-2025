import { ReactNode } from 'react';
import BentoCardPerfil from './Perfil';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode,
  className?: string,
}

function BentoCard({ children, className = '' }: Props) {
  return <div className={`${className} ${styles.bentoCard}`}>{children}</div>
}

BentoCard.Perfil = BentoCardPerfil;

export default BentoCard;