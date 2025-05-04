import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyIndexFunction, { foo as yellow, bar } from './mymodule';
import { HighlightedText, Dashboard, CourseCatalog } from './components/Day3/Day3'
import { MyInput, MyCounter, UserInfo, withLoader } from './components/Day4/Day4';
import { BatchCounter } from './components/Day5/Day5';
import MovieReviews from './components/Day5/MovieReviews';

// import Part0, { Part2 } from './Activity1';
const UserInfoWithLoader = withLoader(UserInfo);

function App() {
  return (
    <div className="App">

      <MovieReviews />

      {/* <BatchCounter /> */}

      {/* <UserInfoWithLoader isLoading={true} name="Carlos" greeting="Kamusta"/>
      <UserInfoWithLoader isLoading={false} name="Carlos" greeting="Kamusta" /> */}


      {/* <MyInput /> */}
      {/* <MyCounter /> */}
      {/* <Dashboard />
      <CourseCatalog />
      <HighlightedText text={"This is a successs text"}/> */}


      
      {/* <MyIndexFunction /> 
      <Part0 />
      <Part2 /> */}
  
    </div>
  );
}

export default App;
 