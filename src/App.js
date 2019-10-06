import React, { Component } from 'react';

import BlogPost from './component/BlogPost';
import FavoritePost from './component/FavoritePost';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// BlogPost

import './App.css';

class App extends Component {

  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

render() {
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Post</Link>
              </li>
              <li>
                <Link to="/favoritePost">Favorite</Link>
              </li>
            </ul>

            {/*<Nav variant="pills" defaultActiveKey="/home">*/}

            {/*  <Nav.Item>*/}
            {/*    <Nav.Link href="/home">Home</Nav.Link>*/}
            {/*  </Nav.Item>*/}

            {/*  <Nav.Item>*/}
            {/*    /!*<Nav.Link eventKey="link-1">About</Nav.Link>*!/*/}
            {/*    <Nav.Link href="/favoritePost">About</Nav.Link>*/}
            {/*  </Nav.Item>*/}

            {/*</Nav>*/}

            {/*<Nav defaultActiveKey="/home" className="flex-column">*/}
            {/*  <Nav.Link href="/home">Home</Nav.Link>*/}
            {/*  <Nav.Link href="/favoritePost" eventKey="link-1">Link</Nav.Link>*/}
            {/*</Nav>*/}



            {/*<>*/}
            {/*  <br />*/}
            {/*  <Navbar bg="primary" variant="dark">*/}
            {/*    <Nav className="mr-auto">*/}
            {/*      <Nav.Link href="/home">Home</Nav.Link>*/}
            {/*      <Nav.Link href="/favoritePost">Features</Nav.Link>*/}
            {/*    </Nav>*/}
            {/*  </Navbar>*/}
            {/*</>*/}

            <Route exact path="/" component={BlogPost} />
            <Route path="/favoritePost" component={FavoritePost} />

          </div>
        </Router>
    );
  }
}

export default App;
