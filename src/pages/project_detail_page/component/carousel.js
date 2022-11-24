
import { Carousel } from '@sefailyasoz/react-carousel'
import '../../../styles/carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
export default function ImageCarousel() {


    const CarouselData = [
        {
            image: 'https://picsum.photos/300/300',
        },
        {
            image: 'https://picsum.photos/1200/800',
        },
        {
            image: 'https://picsum.photos/720/720',
        },
        {
            image: 'https://picsum.photos/1920/1080',
        },
        {
            image: 'https://picsum.photos/480/360',
        },
    ]
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