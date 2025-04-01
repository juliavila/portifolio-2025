import BentoCard from '../../components/BentoCard'
import { concatClassName } from '../../util/style'
import styles from './styles.module.scss'

const className = (names: string) => concatClassName(styles, names);

export const BentoHome = () => {
  return <div className={styles.bentoHome}>

    <div className={styles.content}>

      <div className={styles.header}>
        <img src="https://images.unsplash.com/photo-1658843057461-9727fd6d0566?q=80&w=2681&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="me" height={'100px'} />
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
          <BentoCard>ui-ux</BentoCard>
        </div>
        <div className={className('card development')}>
          <BentoCard>development</BentoCard>
        </div>

      </div>


    </div>

  </div >
}