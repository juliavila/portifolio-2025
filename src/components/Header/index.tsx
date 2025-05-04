import { useContext } from 'react';
import { InternacionalizationContext } from '../../context/internacionalizationContext';
import texts from '../../internationalization/texts';
import LanguageToogle from '../LanguageToogle';

import styles from './styles.module.scss';

function Header({ goToHome }: { goToHome: () => void }) {
  const { language } = useContext(InternacionalizationContext);

  return <div className={styles.header}>
    <h3
      className={styles.title}
      onClick={goToHome}
    >
      {texts.header[language]}
    </h3>
    <LanguageToogle />
  </div>
}

export default Header;