import { useState } from 'react';
import './App.css';

import Banana from './assets/banana.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand : "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 45, brand : "BMW", color: "Branco", newCar: false, km: 3764},
    {id: 14, brand : "Renault", color: "Azul", newCar: false, km: 3632},
  ]

  const pessoas = [
    {nome: "a", idade: 1, profissao: "A"},
    {nome: "b", idade: 2, profissao: "B"},
    {nome: "c", idade: 3, profissao: "C"},
  ]

  function showMessage(){
    console.log("evento do componente pai");
  }

  const[message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      
      <h1>Avançando em react</h1>
      <h2>teste</h2>
      
      {/** imagem em public */}
      <div>
        <img src="/banana.jpg" alt="banana" />
      </div>
      
      {/**Imagem em assets */}
      <div>
        <img src={Banana} alt="Banana"/>
      </div>
      
      <ManageData />
      
      <ListRender />
      
      <ConditionalRender />
      
      <ShowUsername name = {userName} />
      
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
      <CarDetails brand="Ford" color="Vermelha" km = {0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km = {4500} newCar={false} />

      <h2>loop</h2>
      {cars.map((car) => (
        <CarDetails 
          key = {car.id}
          brand = {car.brand} 
          color = {car.color} 
          km = {car.km} 
          newCar={car.newCar}  
        />
      )
      )}

      <Fragment propFragment="teste"/>

      <Container>
        <p>conteúdo</p>
      </Container>

      <ExecuteFunction myFunction = {showMessage}/>

      <Message mds={message} />
      <ChangeMessageState handleMessage = {handleMessage}/>

    </div>
  );
}

export default App;
