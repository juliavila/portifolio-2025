import { useContext, useMemo } from "react";
import { InternacionalizationContext, Languages } from "../../context/internacionalizationContext";

import styles from './styles.module.scss';

export default function LanguageToogle() {
  const { setLanguage, language } = useContext(InternacionalizationContext);

  const nextLanguage: Languages = useMemo(() => language === 'en' ? 'pt' : 'en', [language])

  return <button
    className={styles.toogle}
    onClick={() => setLanguage(nextLanguage)}
  >
    to {nextLanguage}
  </button>

}