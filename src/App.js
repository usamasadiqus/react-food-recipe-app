import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Header search={search} onInputChange={onInputChange} />
    </div>
  );
}

export default App;
