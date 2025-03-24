// components
import FirstComponnent from './components/FirstComponnent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponnent from './components/MyComponnent';
import Events from './components/Events';
import Challenge from './components/Challenge';
// styles
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>fundamentos react</h1>
      <FirstComponnent />
      <TemplateExpressions />
      <MyComponnent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
