import BentoCard from ".."
import styles from './styles.module.scss'

function BentoCardPerfil() {
  return <BentoCard>
    <div className={styles.perfil}>
      <h1><span>Júlia</span><br />Vila<br />Lima</h1>
      <p>
        frontend developer,
        <br />
        UI and UX designer
      </p>
    </div>
  </ BentoCard>
}

export default BentoCardPerfil;