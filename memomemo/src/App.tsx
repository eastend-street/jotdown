import * as React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MemoEditor from "./components/MemoEditor/MemoEditor";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">This is memo and bookmark web service</p>
        <MemoEditor />
        <Footer />
      </div>
    );
  }
}

export default App;
