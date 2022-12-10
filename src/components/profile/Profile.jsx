import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default class Counter extends Component {
  state = {
    Person: {
      fullName: "Wassim Bjaoui",
      bio: "Ready To Get Started with Custom Website Development services?",
      imgSrc:
        "https://scontent.ftun19-1.fna.fbcdn.net/v/t1.6435-9/164222942_2929100397375085_880923795050942611_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=1OMbQFi6PjkAX8WK-gU&_nc_ht=scontent.ftun19-1.fna&oh=00_AfBr80VruIGWlTaXUOWR9YyFUia9tKIhS7AKhU8vV4nFQw&oe=63B9B414",
      profession: "Full-stack Web Development",
    },
    show: true,
    timer: 0,
  };

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }
  render() {
    return (
      <div>
        {this.state.show && (
          <Card>
            <Card.Img
              variant="top"
              src={this.state.Person.imgSrc}
              style={{ width: "20%", borderRadius: "30%" }}
            />
            <Card.Body>
              <Card.Text>
                <h1> {this.state.Person.fullName}</h1>

                <h3>Bio:</h3>
                <p>{this.state.Person.bio}</p>
                <h3>Profession:</h3>
                <p> {this.state.Person.profession}</p>
              </Card.Text>
              <Button
                variant="outline-info"
                style={{ width: "100px", fontSize:"20px" }}
              >
                {this.state.timer}sec
              </Button>{" "}
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}
