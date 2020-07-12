import React,{ Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Result from './components/Result';

class App extends Component{
  state={
    result:''
  }

  buttonPressed = buttonName => {
    if(buttonName === "="){
      this.calculate();
    }
    else if(buttonName === "c"){
      this.reset();
    }
    else
    this.setState({
      result:this.state.result + buttonName
    });
  };

  calculate = () => {
   try{
   this.setState({
       result: eval(this.state.result)
     });
    }catch(e)
    {
      this.setState({
        result:0
      })
    }
  };

  reset = () => {
   this.setState({
     result:''
   })
  };

  render(){
  return (
    <div className="App">
      <div className="cal_body">
      <Result result={this.state.result}/>
      <Keypad buttonPressed={this.buttonPressed}/>
      </div>
    </div>
  );
  }
}

export default App;
