import { BiLogoGoogle } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle,AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import bgpng from '../../assets/bg.png'


const RightSideNavigation = () => {
    return (
        <div>
            <div>
            <h2 className="font-bold text-2xl">Login With</h2>
            <div className='flex flex-col gap-3 mt-10'>
            <Link><button className='flex rounded-md text-blue-500 btn-outline items-center btn w-full'><BiLogoGoogle className='text-xl'/>Loogin With Google</button></Link>
            <Link><button className='flex rounded-md text-black btn-outline items-center btn w-full'><FaGithub className='text-xl'/>Loogin With Github</button></Link>
            </div>
            </div>

            <div className='mt-10'>
            <h2 className="font-bold text-2xl mb-5">Find Us On</h2>

            <div>
                <Link><p className='rounded-t-md text-2xl text-gray-500 flex items-center p-4 gap-1 border font-medium'><BsFacebook className='text-blue-500'/>Facebook</p></Link>
                <Link><p className='text-2xl text-gray-500 flex items-center p-4 gap-1 border-x font-medium'><AiFillTwitterCircle className='text-blue-500 text-3xl'/>Twitter</p></Link>
                <Link><p className='rounded-b-md text-2xl text-gray-500 flex items-center p-4 gap-1 border font-medium'><AiFillInstagram className='text-pink-500 text-3xl'/>Instagram</p></Link>
            </div>
            </div>

            <div className='bg-gray-100 p-4 mt-5'>
            <h2 className="font-bold text-2xl mb-5">Q-Zone</h2>  
            <div>
                <img className='mx-auto' src={qzone1} alt="" />
                <img className='mx-auto' src={qzone2} alt="" />
                <img className='mx-auto' src={qzone3} alt="" />
            </div>

            </div>


            <div className='text-center mt-5 px-10 py-10 space-y-8 text-white' style={{backgroundImage:`url("${bgpng}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
             <h1 className='text-4xl font-bold '>Create an <br /> Amazing <br /> Newspaper</h1>
             <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
             <Link><button className='text-xl btn btn-secondary text-white bg-red-500 rounded-none mt-8 font-semibold'>Learn More</button></Link>
            </div>
            
        </div>
    );
};

export default RightSideNavigation;