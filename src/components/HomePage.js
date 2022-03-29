import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { GetCountryCount, GetGenderCount, GetUsersCount } from '../api/users';
import { RadialChart } from 'react-vis';

const HomePage = () => {

  return(

    <div className="h-5/6 w-full grid gap-8 grid-cols-4 grid-rows-3">
      <div className="shadow-2xl bg-white shadow-blue-300/30 rounded-xl p-12 flex justify-between items-center">
        <UserWallet />
      </div>
      <div className="shadow-2xl bg-white shadow-blue-300/30 rounded-xl p-12">
        <GenderWallet />
      </div>
      <div className="shadow-2xl bg-white shadow-blue-300/30 rounded-xl p-12">
        <CountryWallet />
      </div>

      <div className="shadow-2xl bg-white shadow-blue-300/30 rounded-xl p-12 row-span-3">
        <CountryTopList />
      </div>
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


  const [genderChartData, setGenderChartData] = useState(null);
  const { data, isLoading, error } = useQuery('gendercount', () => GetGenderCount(), {
    onSuccess: (data) => {
      let genderCount = data.data;
      let genderChartArray = Object.keys(genderCount).map((key) => ({angle: genderCount[key], label: key}));
      setGenderChartData(genderChartArray);
    }
  });

  if (isLoading) return 'loading...'

  return(
    <div className='h-full w-full flex flex-col gap-4 justify-center items-center'>
      <h2 className='font-bold text-xl uppercase'>Répartition par genre</h2>
      <RadialChart data={genderChartData} height={200} width={200} innerRaidus={68} radius={75} showLabels/>
    </div>
  )

}

const CountryWallet = () => {


  const [countryChartData, setCountryChartData] = useState(null);
  const { data, isLoading, error } = useQuery('countrycount', () => GetCountryCount(), {
    onSuccess: (data) => {
      let countryCount = data.data;
      let countryChartArray = countryCount.map((country) => ({ angle: country.count, label: country.countryLabel}));
      setCountryChartData(countryChartArray);
    }
  });

  if (isLoading) return 'loading...'

  return(
    <div className='h-full w-full flex flex-col gap-4 justify-center items-center'>
      <h2 className='font-bold text-xl uppercase'>Répartition par pays</h2>
      <RadialChart data={countryChartData} height={200} width={200} innerRaidus={68} radius={75} showLabels/>
    </div>
  )

}

const CountryTopList = () =>{
  const { data, isLoading, error } = useQuery('countrycount', () => GetCountryCount(), {
    onSuccess: (data) => {
      
    }
  });

  if (isLoading) return 'loading...'

  return(
    <div className='h-full w-full flex flex-col gap-4 justify-center items-center'>
      <h2 className='font-bold text-xl uppercase'>Top 15 des pays</h2>
      {data && data.data.map((country) => (<div>{country.countryLabel} {country.count}</div>))}
    </div>
  )
}

export default HomePage;