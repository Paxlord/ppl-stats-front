import { useState } from "react";
import { useQuery } from "react-query";
import { GetUserByPage } from "../api/users";

const UsersPage = () => {

  const [page, setPage] = useState(0);
  const maxPage = Math.floor(5000/250) - 1;
  const [usersArray, setUsersArray] = useState([]);

  const { data, loading, error } = useQuery(['usersPage', page], () => GetUserByPage(page), {
    onSuccess: (data) => {
      console.log("data", data);
      let tempArray = [...usersArray, ...data.data];

      console.log(tempArray);

      setUsersArray(tempArray);
    }
  });

  return(
    <div className="overflow-auto w-full">
      {usersArray.map((user) => <UserItem user={user} />)}
      { page < maxPage && <button onClick={() => setPage(old => old+1)} className="bg-blue-500 rounded-xl shadow-lg text-white shadow-blue-500/50 text-xl px-10 py-2 uppercase font-bold mx-auto my-8"  >Load More</button>}
    </div>
  );

}

const UserItem = ({user}) => {

  const { name, picture } = user;

  return(
    <div className="flex gap-8 items-center py-4 px-3 my-4 rounded-md bg-white shadow-md">
      <img src={picture.thumbnail} className="rounded-full" />
      <strong>{name.title} {name.first} {name.last}</strong>
    </div>
  );

}

export default UsersPage;