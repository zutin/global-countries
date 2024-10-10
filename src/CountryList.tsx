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

  if (loading) return <p className='text-xl'>Loading...</p>;
  if (error) return <p className='text-xl'>Error :(</p>;

  return data.countries.map(({ emoji, name, capital, languages }: any) => (
    <div key={name} className='p-3 bg-gray-500/10 w-80 h-auto rounded-lg'>
      <p className='text-5xl'>{emoji}</p>
      <p className='text-lg font-semibold'>{name}</p>
      <p className='text-sm text-gray-400'>{capital}</p>
      <p className='mt-2 font-medium'>Languages spoken:</p>
      <p>{languages.map(({ name }: any) => name).join(', ')}</p>
    </div>
  ));
}

export default DisplayCountries;