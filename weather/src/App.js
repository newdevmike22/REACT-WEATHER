import Search from "./comps/search";

const App = () => {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  )
}

export default App;
