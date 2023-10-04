import {BiLogoGoogle,BiLogoGithub,BiLogoFacebookCircle} from 'react-icons/bi'
import{BsInstagram} from 'react-icons/bs'
import{FaTwitter} from 'react-icons/fa'
import kidpic from '../../assets/qZone1.png'
import kidpic2 from '../../assets/qZone2.png'
import kidpic3 from '../../assets/qZone3.png'
import Creatingnewpaper from './Creatingnewpaper'

const Rightsidenav = () => {
    return (
        <div>

            <h2 className="font-poppins font-medium mb-1 text-xl text-black">Login with</h2>
            <div>
                <button className=" text-center justify-center items-center gap-2 flex className='flex text-center' border border-black w-full rounded-sm py-1 mb-2">
                 <div className=' text-xl'><BiLogoGoogle></BiLogoGoogle></div>
                    <div className='font-poppins font-normal text-base'>Login with Google</div> 
                </button>
                <button className=" text-center justify-center items-center gap-2 flex className='flex text-center' border border-black w-full rounded-sm py-1 mb-10 ">
                 <div className=' text-xl'> 
                 <BiLogoGithub></BiLogoGithub></div>
                    <div className='font-poppins font-normal text-base'>Login with github</div> 
                </button>
            </div>

            <div>
            <h2 className="font-poppins font-medium mb-1 text-xl text-black">Finds us on</h2>
            <div className=' border border-[#E7E7E7] rounded-sm mt-2'>
                <div  className=' flex text-start md:justify-start items-center ps-4 text-lg gap-2 py-2'>

                    <BiLogoFacebookCircle className=' text-xl'></BiLogoFacebookCircle>
                    <h2 >Facebook</h2>
                </div>
                <hr />
                <div  className=' flex text-start justify-start items-center ps-4 text-lg gap-2 py-2'>
                      <FaTwitter className=' text-xl'></FaTwitter>
                    <h2 >Twitter</h2>
                  
                </div>
                <hr />
                <div  className=' flex text-start justify-start items-center ps-4 text-lg gap-2 py-2'>
                    <BsInstagram className=' text-xl'></BsInstagram>
                    <h2 >Instagram</h2>
                    <hr />
                </div>
            
            </div>

            </div>
            <div className='pb-10 pt-4 px-4 mt-10 bg-[#F3F3F3]'>
                <h2 className="font-poppins font-semibold text-xl text-black mb-4">Q-Zone</h2>
                <div>
                    <img src={kidpic} alt="" />
                    <img src={kidpic2} alt="" />
                    <img src={kidpic3} alt="" />
                </div>
                </div>
                <div className=' mt-10'>
                    <Creatingnewpaper></Creatingnewpaper>
                  </div>
        </div>
    );
};

export default Rightsidenav;