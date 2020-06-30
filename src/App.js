import React from "react";
import "./App.css";
import UserItem from "./components/UserItem";
import { v4 as uuid } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      users: [
        {
          id: 1,
          name: "Awal",
          email: "awal@email.com",
        },
        {
          id: 2,
          name: "Zak",
          email: "zak@email.com",
        },
        {
          id: 3,
          name: "Comfort",
          email: "comfort@email.com",
        },
        {
          id: 4,
          name: "Rick",
          email: "rick@email.com",
        },
        {
          id: 5,
          name: "Morty",
          email: "morty@email.com",
        },
      ],
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      name: this.state.name,
      email: this.state.email,
    };

    this.setState({
      users: [...this.state.users, newUser],
      name: "",
      email: "",
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <br />
            <input type="submit" />
          </form>
        </div>
        <div>
          {this.state.users.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
