import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './CarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import PetCard from '../PetCard'
import AddCard from '../AddCard'

type PropType = {
  slides: PetData[]
  options?: EmblaOptionsType
  HandleModal: (value:boolean) => void
}
type PetData = {
  id: number,
  petName: string,
  imgUrl: string,
  birthday: string,
  gender: string,
  species: string,
  weight: number,
}

const EmblaCarousel: React.FC<PropType> = ({ slides, options, HandleModal }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({align:'center',...options})

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index,data) => (
            <div className="embla__slide" key={index}>
              <PetCard data={data} HandleModal={HandleModal}/>
              {/* <div className='bg-black'>hello</div> */}
            </div>
          ))}
          <div className="embla__slide">
            <AddCard/>
          </div>
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
