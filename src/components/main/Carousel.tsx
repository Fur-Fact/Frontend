import Slider from 'react-slick';
import PetCard from './PetCard';

const PetCardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full p-4">
      <Slider {...settings}>
        <div>
          <PetCard />
        </div>
        <div>
          <PetCard />
        </div>
        <div>
          <PetCard />
        </div>
        {/* 필요한 만큼 PetCard 컴포넌트를 추가합니다. */}
      </Slider>
    </div>
  );
}

export default PetCardCarousel;
