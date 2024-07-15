import Carousel from '../../components/main/Carousel/Carousel'
import { EmblaOptionsType } from 'embla-carousel'


const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const MainPage = () =>{


  return(
    <section className='flex flex-row'>
      <Carousel slides={SLIDES} />
    </section>
  )
}

export default MainPage