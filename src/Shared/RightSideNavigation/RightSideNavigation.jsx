import { BiLogoGoogle } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle,AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';


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
                <Link><p className='text-2xl text-gray-500 flex items-center p-4 gap-1 border font-medium'><BsFacebook className='text-blue-500'/>Facebook</p></Link>
                <Link><p className='text-2xl text-gray-500 flex items-center p-4 gap-1 border font-medium'><AiFillTwitterCircle className='text-blue-500 text-3xl'/>Twitter</p></Link>
                <Link><p className='text-2xl text-gray-500 flex items-center p-4 gap-1 border font-medium'><AiFillInstagram className='text-pink-500 text-3xl'/>Instagram</p></Link>
            </div>
            </div>

            <div className='bg-gray-100'>
            <h2 className="font-bold text-2xl mb-5">Q-Zone</h2>  
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>

            </div>
            
        </div>
    );
};

export default RightSideNavigation;