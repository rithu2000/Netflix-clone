import React from "react";
import "./App.css"
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { Originals,ComedyMovies,ActionMovies,Trending,RomanceMovies,HorrorMovies } from './Components/urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title={'Netflix Originals'} urls={Originals} />
      <RowPost title={'Trending'} urls={Trending} />
      <RowPost title={'Comedy Movies'} isSmall urls={ComedyMovies} />
      <RowPost title={'Horror Movies'} isSmall urls={HorrorMovies} />
      <RowPost title={'Action Movies'} isSmall urls={ActionMovies} />
      <RowPost title={'Romance Movies'} isSmall urls={RomanceMovies} />



    </div>
  );

}
export default App;