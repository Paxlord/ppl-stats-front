import { useQuery } from 'react-query';
import { GetUsersCount } from '../api/users';

const HomePage = () => {

  return(

    <div className="h-5/6 w-full grid gap-8 grid-cols-4 grid-rows-3">
      <div className="shadow-2xl bg-white shadow-blue-300/30 rounded-xl p-12 flex justify-between items-center">
        <UserWallet />
      </div>
      <div className="shadow-2xl bg-white shadow-blue-300/30 rounded-xl p-12">heyo</div>
      <div className="shadow-2xl bg-white shadow-blue-300/30 rounded-xl p-12">heyo</div>

      <div className="shadow-2xl bg-white shadow-blue-300/30 rounded-xl p-12 row-span-3">heyo</div>
      <div className="shadow-2xl bg-white shadow-blue-300/30 rounded-xl p-12 col-span-3 row-span-2">heyo</div>

    </div>

  );

}

const UserWallet = () => {

  const { data, isLoading, error } = useQuery('usercount', () => GetUsersCount());

  if (isLoading) return 'loading...'

  return(
    <div className='h-full w-full flex flex-col gap-4 justify-center items-center'>
      <h2 className='font-bold text-xl uppercase'>Utilisateurs</h2>
      <strong className='xl:text-8xl lg:text-6xl text-3xl'>{data.data}</strong>
    </div>
  )

}

const GenderWallet = () => {

  const { data, isLoading, error } = useQuery('usercount', () => GetUsersCount());

  if (isLoading) return 'loading...'

  return(
    <div className='h-full w-full flex flex-col gap-4 justify-center items-center'>
      <h2 className='font-bold text-xl uppercase'>Utilisateurs</h2>
      <strong className='xl:text-8xl lg:text-6xl text-3xl'>{data.data}</strong>
    </div>
  )

}

export default HomePage;