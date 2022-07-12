import './App.css';
import Header from './components/Header';

const App = () =>{

  return(
    <div>
      <Header menu={["Москва", "Санкт-Петербург"]}/>
      <h1>Hellow</h1>
      <p>Я реакт приложение!</p>
    </div>
  )
}

export default App
