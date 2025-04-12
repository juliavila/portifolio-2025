import { useContext } from "react";
import BentoCard from ".."
import { InternacionalizationContext } from "../../../context/internacionalizationContext";
import texts from "../../../internationalization/texts";
import BentoCardDetails from "../BentoCardDetails";
import styles from './styles.module.scss'

type Props = {
  showDetails: boolean,
  onClose: () => void;
  onFocus: () => void;
}

function BentoCardPerfil({ showDetails, onClose, onFocus }: Props) {
  const { language } = useContext(InternacionalizationContext);

  const [var1, var2] = texts.bentoCard.perfil.cardContent[language].split('#');

  const footer = <address>
    <a href="mailto:juliaviladelima@gmail.com">{texts.bentoCard.perfil.details.footer[language]}</a>
  </address>

  return <BentoCard>
    {showDetails
      ?
      <BentoCardDetails
        onClose={onClose}
        title="Júlia Vila de Lima"
        paragraphs={texts.bentoCard.perfil.details.paragraphs[language]}
        footer={footer}
      />
      :
      <button
        className={styles.container}
        onClick={onFocus}
      >
        <h1>Júlia<br />Vila<br />Lima</h1>
        <p>
          {var1}
          <br />
          {var2}
          <br />
          <br />
          ✽ ✾ ✿ ❀ ❁ ❃ ❊ ❋ ✤
        </p>
      </button>
    }
  </ BentoCard>
}

export default BentoCardPerfil;