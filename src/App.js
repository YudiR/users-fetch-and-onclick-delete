import React from "react";
import Users from "./components/users";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  delete = index => {
    console.log("this is the index!!",index);
    let dataCopy = JSON.parse(JSON.stringify(this.state.users));
    dataCopy.splice(index,1)
    this.setState(
      {
        users: dataCopy
      },
      console.log(this.state.users, "state::::delete:::::::")
    );

  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json()) // Transform the data into json
      .then(data => {
        let userArray = data.map((e, i) => e.name);
        console.log(userArray);

        this.setState(
          {
            users: userArray
          },
          console.log(this.state.users, "state:::::::::::")
        );
      });
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        {this.state.users.map((user, index) => (
          <Users key={index} name={user} index={index} delete={this.delete} />
        ))}
      </div>
    );
  }
}

export default App;
