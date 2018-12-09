import * as React from 'react';
import Header from './components/Header/Header';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          This is memo and bookmark web service
        </p>
      </div>
    );
  }
}

export default App;
