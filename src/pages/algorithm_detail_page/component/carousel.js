
import { Carousel } from '@sefailyasoz/react-carousel'
import '../../../styles/carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
export default function ImageCarousel({ images }) {


    const CarouselData = images.map((image) => {
        return { image: image }
    });
    return (
        <div className='carousel'>
            <Carousel
                data={CarouselData}
                autoPlay={true}
                rightItem={<div className="arrowbtn"><FaArrowRight /></div>}
                leftItem={<div className="arrowbtn"><FaArrowLeft /></div>}
                animationDuration={3000}
                headerTextType="black"
                subTextType="white"
                size="normal"


            />
        </div>);
}