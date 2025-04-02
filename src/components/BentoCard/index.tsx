import { ReactNode } from 'react';
import BentoCardPerfil from './Perfil';
import styles from './styles.module.scss';
import BentoCardUIUX from './UIUX';

type Props = {
  children: ReactNode,
  className?: string,
}

function BentoCard({ children, className = '' }: Props) {
  return <div className={`${className} ${styles.bentoCard}`}>{children}</div>
}

BentoCard.Perfil = BentoCardPerfil;
BentoCard.UIUX = BentoCardUIUX;

export default BentoCard;