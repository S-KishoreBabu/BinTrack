import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { auth } from '../../../config/firebase/firebaseAuth';
import { Password } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const RegisterForm = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [createPassword,setCreatePassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [contactNumber,setContactNumber] = useState("");
    const navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
        const user = await createUserWithEmailAndPassword(auth,email,confirmPassword);
        alert("Registered Successfully");
        console.log(user);
        setTimeout(()=>{
            navigate('/home');
        },2000);
    }
    catch(error){
        console.log(error);
        alert(error.message);
    }

  }
  return (
    <>
        <form onSubmit={handleSubmit}>
        <div className='w-full mt-5'>
            <label htmlFor="name" className='block text-sm/6 font-medium text-gray-900'>Name</label>
            <input  className='w-full border-b border-green-600 outline-none mt-2' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} id='name' name='name' />
        </div>
        <div className='w-full mt-5'>
            <label className='block text-sm/6 font-medium text-gray-900' htmlFor="email">Email</label>
            <input className='w-full border-b border-green-600 outline-none mt-2' type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className='w-full mt-5'>
            <legend className='block text-sm/6 font-medium text-gray-900'>Gender</legend>
            <div className='flex justify-start pr-40 items-center mt-2'>
                <div className='flex  justify-center gap-3 items-center w-1/2'>
                    <input id="male" type="radio" name="gender" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                    <label htmlFor="male" className="block text-sm/6 font-medium text-gray-900">207 bones</label>
                </div>
                <div className='flex  justify-center gap-3 items-center w-1/2'>
                    <input id="female" type="radio" name="gender" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                    <label htmlFor="female" className="block text-sm/6 font-medium text-gray-900">206 bones</label>
                </div>
            </div>
        </div>
        <div className='w-full mt-5'>
            <label htmlFor="contact-number">Contact No.</label>
            <input className='w-full border-b border-green-600 outline-none mt-2' type="text" name="contact-nuber" id="contact-number" value={contactNumber} onChange={(e)=>{setContactNumber(e.target.value)}} />
        </div>
        <div className='w-full mt-5'>
            <label htmlFor="create-password">Create password</label>
            <input className='w-full border-b border-green-600 outline-none mt-2' type="password" name="create-password" id="create-password" value={createPassword} onChange={(e)=>{setCreatePassword(e.target.value)}} />
        </div>    
        <div className='w-full mt-5'>
            <label htmlFor="confirm-password">Confirm password</label>
            <input className='w-full border-b border-green-600 outline-none mt-2' type="password" name="confirm-password" id="confirm-password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
        </div>   
        <button type="submit" className='w-full mt-8 h-10 text-white hover:bg-green-700 cursor-pointer bg-green-600'>SUBMIT</button>              
        </form>
    </>
  )
}

export default RegisterForm