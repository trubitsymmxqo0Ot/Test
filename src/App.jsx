import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState('');
  const [userText, setUserText] = useState('');
  const onClickToggle = () => {
    setToggle(prev => !prev);
  }
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100)
  })
  return (
    <div>
      <h1 data-testid='h1Test'>{text}</h1>
      <h2 data-testid='userH1'>{userText}</h2>
      {toggle === true && <div data-testid="toggle-text">toggle text</div>}
      {data && <div style={{color: "red"}}>text</div>}
      <h1>Hello world</h1>
      <button onClick={onClickToggle} data-testid="toggle-button">click me</button>
      <input type="text" placeholder='user event input' onChange={e => setUserText(e.target.value)}/>
      <input type="text" placeholder='new input' onChange={e => setText(e.target.value)}/>
      <input type="text" placeholder='some input...'/>
    </div>
  )
}

export default App
