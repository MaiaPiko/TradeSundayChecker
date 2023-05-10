import './App.css'
import Checker from './components/Checker';
import { Layout } from 'antd';
const { Header } = Layout;
import { currentDate } from './logic/date';
import 'antd/dist/antd.css';



function App() {

  return (
    <>
<p style={{ display: 'flex', justifyContent: 'flex-start' }}>Dzisiaj jest:<span className='hacker-green' style={{ marginLeft: '0.5rem' }}>{currentDate()}</span></p>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
   <Checker/>
   </div>
   </>
  )
}

export default App
