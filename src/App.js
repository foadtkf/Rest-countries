import './App.css';
import Person from './components/Person/Person';
import Country from './components/Country/Country';
import ButtonClick from './components/ButtonClick/ButtonClick';
function App() {
    return ( <div className = "App" > 
        <Person></Person>
        <Country></Country>
    <ButtonClick></ButtonClick>
      </div>
    );
}

export default App;