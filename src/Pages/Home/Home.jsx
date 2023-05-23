import Slider from './Slider';
import Gallery from './Gallery';
import Category from './Category';
import useTitle from '../../Hooks/useTitle';
import Partner from './Partner';
import Testimonial from './Testimonial';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Slider/>
            <Category/>
            <Gallery/>
            <Testimonial/>
            <Partner/>
        </div>
    );
};

export default Home;