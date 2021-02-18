import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

import Products from './components/products';

class App extends React.Component {

  state = {
    products: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then((data) => {
      this.setState({ products: data })
    })
    .catch(console.log)
  }

  render () {
    return (
      <div>
      <Header></Header>
      <Products products={this.state.products} />
      <NameForm></NameForm>
      </div>
    );
  }
}

class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: '', price: 0 };
  }

  handleChangeTitle = (event) => {
    this.setState({title: event.target.value, price: parseInt(this.state.price)});
  }

  handleChangePrice = (event) => {
    this.setState({title: this.state.title, price: parseInt(event.target.value)});
  }

  handleSubmit = (event) => {

    fetch('http://localhost:8080/products', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state),
        headers: new Headers({'content-type': 'application/json'}),
      }).then(function(response) {
        console.log(response)
        alert('Form submited');
        return response.json();
      });

    event.preventDefault();
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.title} name="title" onChange={this.handleChangeTitle} />
          Price:
          <input type="number" value={this.state.pr} name="price" onChange={this.handleChangePrice} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Header extends React.Component {
  render() {
    const subject = "Cloud Course";
      return (
        <div className="App">
              <img src={logo} className="App-logo" alt="logo" />
              <p> Hello, {subject}! </p>  
        </div>
      );
  }
}



export default App;
