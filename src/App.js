import React from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import NavMain from "./components/navbar/NavMain";
import { Button } from "semantic-ui-react";
import Footer from "./components/navbar/footer/Footer";
class App extends React.Component {
  state = {
    show: false,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <NavMain />
        <Button
        style={{marginTop:"30px"}}
        className="start"
          basic
          color="blue"
          content="Click Here To See My Profile"
          onClick={this.handleShowPerson}
        />


        {this.state.show ? <Profile /> : null}
        <Footer />
      </>
    );
  }
}

export default App;
