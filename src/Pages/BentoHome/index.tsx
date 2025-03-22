import { BentoCard } from '../../components/BentoCard'
import './styles.scss'

export const BentoHome = () => {
  return <div className='bentoHome'>
    <div className='card perfil'>
      <BentoCard />
    </div>
    <div className='card ui-ux'>
      <BentoCard />
    </div>
    <div className='card external-links'>
      <BentoCard />
    </div>
    <div className='card hobbies'>
      <BentoCard />
    </div>
    <div className='card development'>
      <BentoCard />
    </div>
    <div className='card ilustration'>
      <BentoCard />
    </div>
  </div>
}