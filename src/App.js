import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anowar Hossain' ,'Jafor', 'sakib', 'Alomgir', 'Salman','suvo']
  const products =[
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
]
const productNames = products.map(product => product.name)
console.log(productNames);
const nayokNames = nayoks.map(nayok => nayok)
console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>My First React site</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        {/* <Sector name="Web-development" salary="$12000" greed="First"></Sector>
        <Sector name="Web-desginer" salary="$11000" greed="Second"></Sector>
        <Sector name="Graphic-desginer" salary="$10000" greed="Third"></Sector> */}
        
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () =>  setCount(count + 1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Dcrease</button>
      <button onClick={() =>  setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
     <ul>
       {
         users.map(user => <li>{user.phone}</li>)
       }
     </ul>
    </div>
  )
}

// function Sector(props){
//   const sectorStyle={
//       width:'300px',
//       backgroundColor:'pink',
//       color:'black',
//       margin:'15px',
//       float:'left'

//   }
//     return(
//       <div style={sectorStyle}>
//         <h2>{props.name}</h2>
//         <h3>{props.salary}</h3>
//         <h4>{props.greed}</h4>
//       </div>
//     )
// }

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    marginLeft:'50px'
  }
  const {name, price} =props.product;
  console.log(name, price)
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}


export default App;
