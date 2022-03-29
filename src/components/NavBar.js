import { AiFillHome } from 'react-icons/ai';
import { ImUsers } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import Clock from 'react-live-clock';

const Menu = [
  { label: "Accueil", icon: <AiFillHome size={24} />, url: "/"},
  { label: "Utilisateurs", icon: <ImUsers size={24} />, url: '/users'},

];

const MenuItem = ({ menuItem }) => {
  
  const {label, icon, url} = menuItem;
  const navigate = useNavigate();
  
  return(
    <div className='flex gap-x-3 px-4 items-center hover:bg-gray-400 py-4' onClick={() => navigate(url)}>
      {icon}
      <h2 className='uppercase text-xl'>{label}</h2>
    </div>
  )
}

const ProfileItem = () => {

  return(
    <div className='flex flex-col items-center gap-5 mb-8'>
      <Clock format='HH:mm:ss' timezone='Europe/Paris' ticking={true} />
      <div className='rounded-full bg-red-500 w-24 h-24' />
      <h2 className='text-xl font-semibold uppercase'>Nom Prénom</h2>
    </div>
  )

}

const NavBar = () => {
 
  return(
    <div className='w-56 h-full shadow-lg flex flex-col py-8 bg-white'>
      <ProfileItem />
      {Menu.map((menuItem) => <MenuItem menuItem={menuItem} />)}
    </div>
  )

}

export default NavBar;