import { ReactElement, useContext } from 'react';
import Button from '../../Button';
import styles from './styles.module.scss';
import texts from '../../../internationalization/texts';
import { InternacionalizationContext } from '../../../context/internacionalizationContext';

type Props = {
  onClose: () => void;
  title: string;
  paragraphs: string[];
  footer?: ReactElement;
}

function BentoCardDetails({ onClose, title, paragraphs, footer }: Props) {

  const { language } = useContext(InternacionalizationContext);

  return <div className={styles.details}>
    <div className={styles.header}>
      <Button onClick={onClose}>{texts.buttons.back[language]}</Button>
    </div>
    <div className={styles.content}>
      <h2>{title}</h2>
      {paragraphs.map(p => <p key='p'>{p}</p>)}
      {footer &&
        <div className={styles.footer}>{footer}</div>
      }
    </div>
  </div>
}

export default BentoCardDetails;