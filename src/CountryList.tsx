import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query {
    countries {
      emoji
      name
      capital
      languages {
        name
      }
    }
  }
`;

function DisplayCountries() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.countries.map(({ emoji, name, capital, languages }: any) => (
    <div key={name}>
      <h3>{emoji} - {name}</h3>
      <br/>
      <b>About this country:</b>
      <p>{name} capital city is {capital}</p>
      <br/>
      <b>Languages spoken:</b>
      <ul>
        {languages.map(({ name }: any) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  ));
}

export default DisplayCountries;