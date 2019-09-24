import React, { Component } from "react";

export default class ContactList extends Component {
  constructor() {
    super();
    this.state = this.contacts;
    this.addRandom = this.addRandom.bind(this);
  }

  addRandom() {
    const contacts = this.props.contacts;
    const randomizer = Math.floor(Math.random() * 244 + 5);
    const randomizedArray = contacts.slice(0, randomizer);

    this.setState({
      ...this.state.contacts
    });
  }

  render() {
    const reducedArray = this.props.contacts.slice(0, 5);

    return (
      <div className="allcontacts">
        <button onClick={this.addRandom}>Add Random Contact</button>
        <span>
          <h5>Picture Name Popularity</h5>
        </span>
        {reducedArray.map(contact => (
          <div className="contactrow">
            <img src={contact.pictureUrl} className="picture" />
            <h5 className="name">{contact.name}</h5>
            <h5 className="popularity">{contact.popularity}</h5>
          </div>
        ))}
      </div>
    );
  }
}
