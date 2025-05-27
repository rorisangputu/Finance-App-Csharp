import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import Layout from "./layout/Layout";


function App() {
  return (
    <>
      <Layout>
        <main>
          <Search/>
          <CardList/>
        </main>
      </Layout>
    </>
  );
}

export default App;
