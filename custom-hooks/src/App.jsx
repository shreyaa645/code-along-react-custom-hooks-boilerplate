import './App.css'
import useStorage from './hooks/useCustom'

function App() {

  const {setStorage} = useStorage()

  return (
    <div>
      <input type="text" placeholder='ENTER DATA' onChange={(e) => setStorage(e.target.value)} />
    </div>
  )
}

export default App
