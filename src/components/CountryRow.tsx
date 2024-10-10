import { Country } from "../types";

function CountryRow (country: Country) {
  return (
    <div className='p-3 bg-gray-500/10 w-80 h-56 rounded-lg content-center'>
      <p className='text-5xl'>{country.emoji}</p>
      <p className='text-lg font-semibold'>{country.name}</p>
      <p className='text-sm text-gray-400'>{country.capital}</p>
      {country.languages && country.languages.length > 0 ?
        <>
          <p className='mt-2 font-medium'>Languages spoken:</p> 
          <p>{country.languages.map(({ name }: any) => name).join(', ')}</p>
        </> : ''
      }
    </div>
  );
}

export default CountryRow;