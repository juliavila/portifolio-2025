import { ReactNode } from 'react';
import BentoCardDevelopment from './Development';
import BentoCardLinks from './Links';
import BentoCardPerfil from './Perfil';
import BentoCardUIUX from './UIUX';

import styles from './styles.module.scss';

type Props = {
  className?: string,
  children: ReactNode,
}

function BentoCard({ children, className = '' }: Props) {
  return <div className={`${className} ${styles.bentoCard}`}>
    {children}
  </div>
}

BentoCard.Perfil = BentoCardPerfil;
BentoCard.UIUX = BentoCardUIUX;
BentoCard.Links = BentoCardLinks;
BentoCard.Development = BentoCardDevelopment;

export default BentoCard;