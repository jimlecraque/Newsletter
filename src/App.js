import Formulaire from './Formulaire';
import './App.css'
import newsletter from './static/email-marketing.png'
function App() {
  return (
    <div className="App">
      <div className='img-div'>
          <img src={newsletter} alt="newsletter" />
      </div>
      <Formulaire/>
    </div>
  );
}

export default App;
