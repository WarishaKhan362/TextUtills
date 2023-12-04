
import './App.css'
//import Home from './component/Home';
import Menu from './component/Menu';
import Section from './component/Section';
import Theme from './component/Theme';
import Usest from './component/Usest';
import Alert from './component/Alert';
import React, { useState } from 'react'
//import Homeback from './component/Homeback';




function App() {
  const [mode, setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#072045';
      showAlert(" Dark mode has been enabled","success"); 
      document.title="Dark-Mode" 
      setInterval(() => {

        document.title="This theme is Good";
      }, 3000);  
      setInterval(() => {

        document.title="This theme is Good...hi";
      }, 6000);   
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled","success");
      document.title="Light-mode";
    }
  }
const [alert, setAlert] = useState("");

const showAlert=(message,type)=>{
  setAlert({
    mess:message,
    type:type
})

}


  return (
   
   
    
      <>
        <Menu  mode={mode} toggleMode={togglemode}></Menu> 
       <Alert alert={alert}></Alert>
      <Usest showAlert={showAlert}></Usest>  
       {/* <Theme></Theme>  */}
      
      {/* //<Home/>
      //<Homeback></Homeback> */}
      
      </>
  )

}


export default App;
