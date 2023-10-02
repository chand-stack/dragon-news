import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='mt-10 space-y-3'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-base text-center'>Journalism Without Fear or Favour</p>
            <p className='text-base text-center'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;