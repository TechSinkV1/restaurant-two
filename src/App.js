
import './App.css';
import Header from './components/Header';
import Restaurant from './components/Restaurant';
import Subheader from './components/Subheader';

function App() {
  return (
    <div className='bg-red-200'>
      <Header/>
      <Subheader/>
      <Restaurant/>
    </div>
  );
}

export default App;
