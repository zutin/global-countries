import { useQuery } from '@apollo/client';
import { CountryRow } from '.';
import { Country } from '../types';
import { GET_COUNTRIES } from '../queries';

function DisplayCountries({ filter }: { filter: string }) {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p className='text-xl'>Loading...</p>;
  if (error) return <p className='text-xl'>Error :(</p>;

  const filteredCountries = data.countries
  .filter((country: Country ) => country.name.toLowerCase().includes(filter.toLowerCase()) || (country.capital && country.capital.toLowerCase().includes(filter.toLowerCase()))
  );

  return filteredCountries.map((country: Country) => (
    <CountryRow key={country.name} {...country} />
  ));
}

export default DisplayCountries;