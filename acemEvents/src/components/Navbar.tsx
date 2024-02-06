
import { ModeToggle } from './mode-toggle'
import { isLogin, logout } from './../helper';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
// import UserProfile from '@/_home/pages/UserProfile';
import { useToast } from './ui/use-toast';
// import env from "react-dotenv";
import profile from '../images/profile.png'

const Navbar = () => {
  const {toast} = useToast()
  const navigate = useNavigate()
  return (
    <nav className='flex justify-between'>
        <Link to={"/"} className='font-semibold text-2xl'>AcemEvents</Link>

        {isLogin()?(
          <div className='flex items-center gap-4'>
            <ModeToggle/>
            <Button variant={'outline'} onClick={()=> {
              logout()
              toast({
                description: 'Successfully signed out'
              })
              navigate("/sign-up")
            }}>Sign Out</Button>
            <button onClick={()=> {
              navigate('/user/profile')
            }}>
            <img src={profile} alt="profile" />
            </button>
          </div>
        ):""}
    </nav>
  )
}

export default Navbar