/*eslint-disable no-unused-vars*/
import React, {Component} from 'react';
/*eslint-enable no-unused-vars*/

// import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component{
  constructor(...args){
    super(...args);

    this.state={
      a: 0
    };
  }



  render(){
    return (
      <div>
        {this.state.a+5}
      </div>
    );
  }
}

export default App;
