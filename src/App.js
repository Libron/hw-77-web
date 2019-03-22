import React, { Component } from 'react';
import ThreadHeader from "./components/ThreadHeader/ThreadHeader";
import ThreadComments from "./containers/ThreadComments/ThreadComments";
import {Container} from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
              <ThreadHeader />
              <ThreadComments/>
          </Container>
      </div>
    );
  }
}

export default App;