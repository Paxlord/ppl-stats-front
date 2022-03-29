import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { GetCountryCount, GetGenderCount, GetUsersCount } from '../api/users';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

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

      <div className="shadow-2xl bg-white shadow-blue-300/30 rounded-xl p-12 col-span-3 row-span-2">
        
      </div>

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
      let genderArray = Object.keys(genderCount).map((key) => genderCount[key]);

      console.log(genderArray);
      let genderChartArray = {
        labels: Object.keys(genderCount),
        datasets: [
          {
            data: genderArray,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
            ]
          }
        ]
      }
      setGenderChartData(genderChartArray);
    }
  });

  if (isLoading) return 'loading...'

  return(
    <div className='h-full w-full flex flex-col gap-4 justify-center items-center'>
      <h2 className='font-bold text-xl uppercase'>Répartition par genre</h2>
      {genderChartData && <Doughnut data={genderChartData} height={200} width={200}/>}
    </div>
  )

}

const CountryWallet = () => {


  const [countryChartData, setCountryChartData] = useState(null);
  const { data, isLoading, error } = useQuery('countrycount', () => GetCountryCount(), {
    onSuccess: (data) => {
      let countryCount = data.data;
      console.log("countries", countryCount);
      let countryArray = Object.keys(countryCount).map((key) => countryCount[key]);
      let countryChartArray = {
        labels: countryCount.map((country) => country.countryLabel ),
        datasets: [
          {
            data: countryCount.map((country) => country.count ),
            backgroundColor: [
              "#F7AEF8",
              "#B388EB",
              "#8093F1",
              "#72DDF7",
              "#5DFDCB",
              "#C5FFFD",
              "#C62E65",
              "#624763",
              "#2F1847",
              "#EE6C4D",
              "#CAFFD0",
              "#613A3A",
              "#A6FFA1",
              "#E7DFC6",
            ]
          }
        ],
      };
      setCountryChartData(countryChartArray);
    }
  });

  if (isLoading) return 'loading...'

  return(
    <div className='h-full w-full flex flex-col gap-4 justify-center items-center'>
      <h2 className='font-bold text-xl uppercase'>Répartition par pays</h2>
      {countryChartData && <Doughnut data={countryChartData} options={{plugins: { legend: { display: false}}}} height={200} width={200}/>}
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