import banner from '../assets/banner.jpg'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Steps from '../components/Steps.jsx'
import Form from '../components/Form.jsx'
import { FaLaptopCode, FaShoppingCart, FaSearch } from "react-icons/fa";

function Home(){
    return(
        <>
            <section className="hero min-h-screen max-w-6xl mx-auto px-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                    src={banner}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
                    />
                    <div>
                    <h1 className="text-5xl font-bold">Building websites that build your business</h1>
                    <p className="py-6">
                        At Web Crafters, we not just build websites but create digital brands of our clients
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </section>
            <section id='services' className='bg-[#F9FAFB] text-black p-20'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-5xl font-bold pb-8'>Our Services</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <Card
                        title="Website Development"
                        description="Modern, responsive websites built with React and Tailwind."
                        Icon={FaLaptopCode}
                        buttonText="Learn More"
                        />
                        <Card
                        title="E-Commerce Solutions"
                        description="Build and manage secure online stores with ease."
                        Icon={FaShoppingCart}
                        buttonText="Get Started"
                        />
                        <Card
                        title="SEO Optimization"
                        description="Improve your Google ranking and boost site speed."
                        Icon={FaSearch}
                        buttonText="Optimize Now"
                        />
                    </div>
                </div>
            </section>
            <section id='portfolio' className='max-w-6xl mx-auto pt-20 pb-20 px-4 sm:px-6'>
                <h2 className='text-5xl font-bold pb-8'>Our Previous Works</h2>
                <Carousel />
            </section>
            <section className="py-12 bg-[#F9FAFB] text-center text-black">
                <h2 className="text-3xl font-bold mb-4">Why Choose Web Crafters?</h2>
                <p className="max-w-xl mx-auto text-gray-600 mb-6">We’re passionate about building digital experiences that help businesses grow. With a focus on clean design, speed, and SEO, we make sure your online presence works as hard as you do.</p>
                <ul className="list-disc text-left max-w-md mx-auto">
                    <li>⚡ Fast Delivery</li>
                    <li>💻 Fully Responsive Designs</li>
                    <li>🔍 SEO-Optimized Code</li>
                    <li>💬 Personal Support</li>
                </ul>
            </section>
            <section className='text-center pt-20 pb-20'>
                <h2 className="text-3xl font-bold mb-6">Our Process</h2>
                <Steps />
            </section>
            <section className="py-12 bg-[#F9FAFB] text-black text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Website?</h2>
                <p className="mb-6">Let’s craft something amazing together. Contact us now to get a free quote!</p>
                <Form />
            </section>
        </>
    )
}

export default Home