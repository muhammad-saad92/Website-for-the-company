import ecommerce1 from '../assets/ecommerce1.png'
import ecommerce2 from '../assets/ecommerce2.png'
import mma from '../assets/mma.png'
import restaurant from '../assets/restaurant.png'
import source from '../assets/source.png'
import CarousalImage from './CarousalImage'
import wood from '../assets/wood.png'
function Carousel(){
    return(
        <div className="carousel rounded-box bg-neutral space-x-4 p-4">
            <CarousalImage source = {ecommerce1} />
            <CarousalImage source = {ecommerce2} />
            <CarousalImage source = {mma} />
            <CarousalImage source = {restaurant} />
            <CarousalImage source = {wood} />
            <CarousalImage source = {source} />
        </div>
    )
}

export default Carousel