import * as React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Body from './components/Body/Body';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
