import { ReactNode } from 'react';
import BentoCardPerfil from './Perfil';
import styles from './styles.module.scss';
import BentoCardUIUX from './UIUX';
import BentoCardLinks from './links';
import BentoCardDevelopment from './development';

type Props = {
  children: ReactNode,
  className?: string,
}

function BentoCard({ children, className = '' }: Props) {
  return <div className={`${className} ${styles.bentoCard}`}>{children}</div>
}

BentoCard.Perfil = BentoCardPerfil;
BentoCard.UIUX = BentoCardUIUX;
BentoCard.Links = BentoCardLinks;
BentoCard.Development = BentoCardDevelopment;

export default BentoCard;