import React from "react";
import './index.css';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Form from './components/Form/Form'

function App() {
  return (
    <div className="container">
    <Header/>
      <List/>
      <Form/>
    </div>
  );
}

export default App;
