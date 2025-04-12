import BentoCard from ".."
import BentoCardDetails from "../BentoCardDetails";
import styles from './styles.module.scss'

type Props = {
  showDetails: boolean,
  onClose: () => void;
  onFocus: () => void;
}

const detailsParagraphs = [
  'Tenho 9 anos de experiência em desenvolvimento de software, atuo hoje como desenvolvedora frontend e designer de experiência.',
  'Sou formada pelo IFSul como técnica em informática (2014) e sou graduada em Design Digital pela ULBRA (2024).'
];

const footer = <address>
  <a href="mailto:juliaviladelima@gmail.com">contact me</a>
</address>

function BentoCardPerfil({ showDetails, onClose, onFocus }: Props) {
  return <BentoCard>
    {showDetails
      ?
      <BentoCardDetails
        onClose={onClose}
        title="Júlia Vila de Lima"
        paragraphs={detailsParagraphs}
        footer={footer}
      />
      :
      <button
        className={styles.container}
        onClick={onFocus}
      >
        <h1>Júlia<br />Vila<br />Lima</h1>
        <p>
          frontend developer,
          <br />
          UI and UX designer
          <br />
          <br />
          ✽ ✾ ✿ ❀ ❁ ❃ ❊ ❋ ✤
        </p>
      </button>
    }
  </ BentoCard>
}

export default BentoCardPerfil;