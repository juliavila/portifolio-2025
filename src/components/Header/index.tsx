import { useContext } from 'react';
import styles from './styles.module.scss';
import { InternacionalizationContext } from '../../context/internacionalizationContext';
import texts from '../../internationalization/texts';
import LanguageToogle from '../LanguageToogle';

function Header({ goToHome }: { goToHome: () => void }) {
  const { language } = useContext(InternacionalizationContext);

  return <div className={styles.header}>
    <div className={styles.pic} onClick={goToHome}></div>

    <div className={styles.actions}>
      <LanguageToogle />

      <h3
        className={styles.title}
        onClick={goToHome}
      >
        {texts.header[language]}
      </h3>
    </div>
  </div>
}

export default Header;