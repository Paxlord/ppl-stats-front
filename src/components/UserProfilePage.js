import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { GetOneUser } from '../api/users';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
 
const UserProfilePage = () => {

  const { id } = useParams();
  const { data, loading, error } = useQuery(['user', id], () => GetOneUser(id));

  if(loading) return 'loading...';

  if(error) return 'error';

  return(
    <div className='w-full my-12'>
      {data && <div className='flex h-full gap-4'>
        <img src={data.data.picture.large} className='rounded-md shadow-xl'  />
        <div className='flex flex-col rounded-md shadow-xl flex-1 p-8'>
          <caption>{data.data.gender}</caption>
          <h1>{data.data.name.title} {data.data.name.first} {data.data.name.last}</h1>
          <h2>{data.data.email}</h2>
          <h2>{data.data.phone}</h2>
          <h2>{data.data.registered.date}</h2>
          <h2>{data.data.registered.age}</h2>
          <h2>{data.data.dob.date}</h2>
          <h2>{data.data.dob.age}</h2>

          <MapContainer center={[data.data.location.coordinates.latitude, data.data.location.coordinates.longitude]} style={{ height: '56rem', width: "100%" }} className="rounded-xl" zoom={4}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[data.data.location.coordinates.latitude, data.data.location.coordinates.longitude]} />
          </MapContainer>
        </div>
      </div>}
    </div>
  );

}

export default UserProfilePage;

