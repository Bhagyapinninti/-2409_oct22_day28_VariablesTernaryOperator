import logo from './logo.svg';
import './App.css';
import Marksheets from './components/Marksheets';

function App() {
  return (
    <div className="App">
      <Marksheets  name="Jack" Tmarks="91" Hmarks="92" Emarks="93" Mmarks="94" Scmarks="95" Somarks="96" remarks="Pass" > </Marksheets>
      <Marksheets  name="Rose"Tmarks="81" Hmarks="82" Emarks="83" Mmarks="84" Scmarks="85" Somarks="86" remarks="Pass" ></Marksheets>
      <Marksheets name="Jane" Tmarks="7" Hmarks="72" Emarks="73" Mmarks="19" Scmarks="75" Somarks="76" remarks="Fail" > </Marksheets>
      <Marksheets name="Peter" Tmarks="61" Hmarks="29" Emarks="63" Mmarks="64" Scmarks="65" Somarks="66" remarks="Fail" > </Marksheets>
    </div>
  );
}

export default App;
