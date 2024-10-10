import CountryList from './CountryList'

function App() {
  return (
    <div className='max-w-[1280px] mx-auto p-[2rem] text-center'>
      <h1 className='text-3xl font-semibold tracking-wider'>Global Countries</h1>
      <div className='flex flex-wrap justify-center items-center mt-8 gap-6'>
        <CountryList />
      </div>
    </div>
  )
}

export default App
