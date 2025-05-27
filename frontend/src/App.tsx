import { useState, type SyntheticEvent } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import Layout from "./layout/Layout";
import { type CompanySearch } from "./company";
import { searchCompanies } from "./api";


function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchRes] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>('');

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
    //console.log(e, search)
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);

    //Type checking
    if(typeof result === 'string'){
      setServerError(result);
    }else if(Array.isArray(result.data)){
      setSearchRes(result.data)
    }

    console.log(searchResult);
  }

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <>
      <Layout>
        <main>
          <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
          {serverError && <h1>{serverError}</h1>}
          <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
        </main>
      </Layout>
    </>
  );
}

export default App;
