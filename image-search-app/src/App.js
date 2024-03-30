// import logo from './logo.svg';
import './App.css';
import { LoadImages, SearchImages } from './components/api';
import Image from './components/image';
import { useState } from 'react';


function App() {
  const [query,setQuery]=useState([]);
  const [search,setSearch]=useState([]);
  console.log(query);
  const data=LoadImages();
  // console.log(data);
  console.log(SearchImages(query));
  const searchQ=()=>{
    // console.log(1);
    setSearch(query);
  }
  const dataS=SearchImages(search);
  // console.log(dataS);
  let result;
  if(search){
     result=dataS.map((img,key)=>(<Image src={img.urls.thumb} key={key} />))
  }
  else{
    result=data.map((img,key)=>(<Image src={img.urls.thumb} key={key} />))
  }
  return (
    <div className="App">
      <div>
        <input type='text' onChange={(event)=>setQuery(event.target.value)}></input>
        <button onClick={searchQ}>Search</button>
      </div>
      <div className="contain">
      {result}
    </div>
    </div>
  );
}

export default App;
