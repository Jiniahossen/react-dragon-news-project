import logo from '../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div>
            <div className=' text-center'>
            <div>
                <img className='mx-auto mb-5 mt-10' src={logo} alt="" />
            </div>
            <div>

                <h2 className='mb-2 font-poppins font-normal text-base text-gray-400'>Journalism Without Fear or Favour</h2>
            </div>
            <div className='mb-10 text-base font-poppins font-medium'>
                 {moment().format("dddd, MMMM D, YYYY")}
            </div>
            
        </div>
        </div>
    );
};

export default Header;