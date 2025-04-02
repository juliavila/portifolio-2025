import BentoCard from '../../components/BentoCard'
import { concatClassName } from '../../util/style'
import styles from './styles.module.scss'

const className = (names: string) => concatClassName(styles, names);

export const BentoHome = () => {
  return <div className={styles.bentoHome}>

    <div className={styles.content}>

      <div className={styles.header}>
        <span className={styles.pic}></span>
        <h3>❀ Portifólio 2025</h3>
      </div>

      <div className={styles.deck}>

        <div className={className('card perfil')}>
          <BentoCard.Perfil />
        </div>
        <div className={className('card external-links')}>
          <BentoCard>external-links</BentoCard>
        </div>
        <div className={className('card ui-ux')}>
          <BentoCard.UIUX />
        </div>
        <div className={className('card development')}>
          <BentoCard>development</BentoCard>
        </div>

      </div>


    </div>

  </div >
}