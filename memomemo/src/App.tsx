import * as React from "react";
import Editor from "./components/Editor/Editor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">This is memo and bookmark web service</p>
        <Editor />
        <Footer />
      </div>
    );
  }
}

export default App;
