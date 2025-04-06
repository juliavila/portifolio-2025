import BentoCard from ".."
import styles from './styles.module.scss'

function BentoCardPerfil({ showDetails }: { showDetails: boolean }) {
  return <BentoCard>
    {showDetails ?
      <div>details</div>
      :
      <div className={styles.container}>
        <h1>Júlia<br />Vila<br />Lima</h1>
        <p>
          frontend developer,
          <br />
          UI and UX designer
          <br />
          <br />
          ✽ ✾ ✿ ❀ ❁ ❃ ❊ ❋ ✤
        </p>
      </div>
    }
  </ BentoCard>
}

export default BentoCardPerfil;