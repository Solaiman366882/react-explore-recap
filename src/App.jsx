
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';


function App() {
  function handleClick(){
    alert('Button Clicked.');
  }
  const handleClick2= () => {
    alert('button 2 clicked.');
  }
  const addToFive = (num) => {
    alert(num+5);
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Friends></Friends>

      <Users></Users>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Second</button>
      <button onClick={() => alert('third button is clicked')}>Third</button>
      <button onClick={() => addToFive(3) }>Add to five</button>
      <Counter></Counter>
    </>
  )
}

export default App
