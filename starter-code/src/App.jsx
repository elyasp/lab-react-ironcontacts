import React, { Component } from "react";

import contacts from "./contacts.json";
import ContactList from "./components/ContactList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="allcontacts">
        <h1>IronContacts</h1>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
