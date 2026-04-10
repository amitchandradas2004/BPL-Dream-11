import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import Newsletter from "./Components/Newsletter/Newsletter";

const fetchPlayer = async () => {
  const res = await fetch("Players.json");
  return res.json();
};
function Loader() {
  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div>
        {" "}
        <span className="loading  loading-bars loading-xl"></span>
      </div>
    </div>
  );
}
function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(5000);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<Loader></Loader>}>
        <Players
          playersPromise={playersPromise}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>
      <Newsletter></Newsletter>
    </>
  );
}

export default App;
