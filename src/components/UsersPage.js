import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { GetUserByPage } from "../api/users";

const UsersPage = () => {

  const [page, setPage] = useState(0);

  const [name, setName] = useState('eva');
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [telephone, setTelephone] = useState('');

  const maxPage = Math.floor(5000/250) - 1;
  const [usersArray, setUsersArray] = useState([]);

  const { data, loading, error } = useQuery(['usersPage', page, name, state, gender, city, telephone], () => GetUserByPage(page, {name, state, gender, city, telephone}), {
    onSuccess: (data) => {
      console.log("data", data);
      let tempArray = [...usersArray, ...data.data];

      console.log(tempArray);

      setUsersArray(tempArray);
    }
  });

  useEffect(() => {
    setUsersArray([]);
    setPage(0);
  }, [name, state, telephone, city, gender])

  return(
    <div className="overflow-auto w-full mx-8">
      <div className="flex gap-4 my-8">
        <input 
          className="transition ease-out rounded-md py-2 px-4 my-6border-blue-200 border-2 focus:border-blue-500 focus:outline-none focus:border-2" 
          placeholder="Nom" 
          onChange={(e) => setName(e.target.value)} />
        <input 
          className="transition ease-out rounded-md py-2 px-4 my-6border-blue-200 border-2 focus:border-blue-500 focus:outline-none focus:border-2" 
          placeholder="City" 
          onChange={(e) => setCity(e.target.value)} />
        <input 
          className="transition ease-out rounded-md py-2 px-4 my-6border-blue-200 border-2 focus:border-blue-500 focus:outline-none focus:border-2" 
          placeholder="Téléphone" 
          onChange={(e) => setTelephone(e.target.value)} />
        <input 
          className="transition ease-out rounded-md py-2 px-4 my-6border-blue-200 border-2 focus:border-blue-500 focus:outline-none focus:border-2" 
          placeholder="Gender" 
          onChange={(e) => setGender(e.target.value)} />
        <input 
          className="transition ease-out rounded-md py-2 px-4 my-6border-blue-200 border-2 focus:border-blue-500 focus:outline-none focus:border-2" 
          placeholder="State" 
          onChange={(e) => setState(e.target.value)} />

      </div>
      {usersArray.map((user) => <UserItem user={user} />)}
      { page < maxPage && <button onClick={() => setPage(old => old+1)} className="bg-blue-500 rounded-xl shadow-lg text-white shadow-blue-500/50 text-xl px-10 py-2 uppercase font-bold mx-auto my-8"  >Load More</button>}
    </div>
  );

}

const UserItem = ({user}) => {

  const { name, picture } = user;

  return(
    <div className="transition ease-in-out flex gap-8 items-center py-4 px-3 my-4 rounded-md bg-white hover:bg-blue-500 hover:text-white hover:shadow-blue-500/50 shadow-md cursor-pointer">
      <img src={picture.thumbnail} className="rounded-full" />
      <strong>{name.title} {name.first} {name.last}</strong>
    </div>
  );

}

export default UsersPage;