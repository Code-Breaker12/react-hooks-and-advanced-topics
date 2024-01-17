import './App.css';
import { useState } from 'react';
import { data } from './data';
// import { people } from './data';

function App() {
  // const people = ['prateek', 'prateeksha', 'raghav', 'akanksha' , 'gargi', 'madhav'];
  const [baseData, setData] = useState(data);
  const removeItem = (id) => {
    console.log('hey', id, data);
    const updatedData = baseData?.filter(item => item.id !== id);
    setData(updatedData);
  };
  return (
    <>
    {baseData?.map(({id , name})=>
    <ul key={id}>
      <li>{name}</li>
      <button onClick={()=>removeItem(id)}>Click me</button>
      </ul>)}
    </>
  )
}

export default App
