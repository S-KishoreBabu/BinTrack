
import cardImage from "../../../assets/registerImg.png"
import { useNavigate } from 'react-router-dom'
import RegisterForm from "./RegisterForm";
const Register = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-max bg-[#f5f5f5] '>
      <div className='w-full h-15 bg-green-500 flex items-center justify-between px-8'>
          <div id="logo">
            <span className='font-extrabold text-2xl text-white'>BinTrack</span>
          </div>
          <div>
            <button className='px-4 py-2 bg-white shadow-md cursor-pointer ' onClick={()=>{navigate("/login")}}>LogIn</button>
          </div>
      </div>
      <div className='h-max py-10 flex justify-center items-center'>
      <div className='flex h-max  w-200 bg-white shadow-md'>
        <div className=' w-2/5 hidden lg:flex flex-col justify-between text-[#fafafa] bg-green-600 py-9 px-7'>
          <div>
            <div>
              <span className='text-2xl font-bold'>Create Your Account</span>
            </div>
            <div className='mt-6'>
              <p>Join our Smart Dustbin Monitoring System to track waste levels in real-time and manage bins efficiently.</p>
            </div>
          </div>
          <div className='h-50  shadow-lg mt-6'>
            <img className='h-full w-full' src={cardImage}  />
          </div>
        </div>
        <div className='py-10 px-7 h-max w-3/5'>
          <RegisterForm/>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Register