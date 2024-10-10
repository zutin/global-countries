function CountryFilter({ setFilter }: { setFilter: (filter: string) => void }) {
  return (
    <input
      type='text'
      placeholder='Search by country or capital name'
      className='p-2 border rounded w-80 mt-4'
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}

export default CountryFilter;
