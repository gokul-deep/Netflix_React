import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Banner from './components/banner/banner'
import Post from './components/post/post'
import { originals, action, comedy, horror, romance, documentaries } from "./contants/urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Post url={originals} title='Netflix Originals' />
      <Post url={action} title='Action' Small />
      <Post url={comedy} title='Comedy' Small />
      <Post url={horror} title='Horror' Small />
      <Post url={romance} title='Romance' Small />
      <Post url={documentaries} title='Documentaries' Small />
    </div>
  );
}

export default App;
