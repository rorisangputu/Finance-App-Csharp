import { useState, type SyntheticEvent } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import Layout from "./layout/Layout";


function App() {
  const [search, setSearch] = useState<string>("");
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
    //console.log(e, search)
  }

  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();
    //console.log(e, search)
  }

  return (
    <>
      <Layout>
        <main>
          <Search onClick={onClick} search={search} handleChange={handleChange}/>
          <CardList/>
        </main>
      </Layout>
    </>
  );
}

export default App;
