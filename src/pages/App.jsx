import './App.css'
import Sidenav from '../components/Sidenav'
import { Homepage } from '../components/Homepage'

function App() {
  return (
    <>
      <div className='h-[800px] w-full font-Tomorrow flex flex-row' style={{ background: '#F3F5FA' }} >
        <Sidenav />
        <Homepage />
      </div>
    </>
  )
}

export default App
