import './App.css'
import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.locations.map(({ id, name, description, photo }: any) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`}/>
      <br/>
      <b>About this location:</b>
      <p>{description}</p>
      <br/>
    </div>
  ));
}

function App() {
  return (
    <>
      <h1>Global Countries</h1>
      <DisplayLocations />
    </>
  )
}

export default App
