import React, { useState } from "react";
import axios from "axios";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";
import personlogo from "../assets/user-group-solid.svg";

const Picture = (props) => {
  const [newData, setData] = useState(props.data.img);
  const [name, setName] = useState("");
  const [feature, setFeature] = useState(props.data.feature);

  const ip = "192.168.97.121"; // wait to change to ai server

  const sendDataHandler = () => {
    axios.put(`http://${ip}:5000/images`, {
      name: name,
      img: newData,
      feature: feature,
    });
    setName("");
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="picture">
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={"data:image/jpg;base64," + props.data.img} />
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <InputGroup className="mb-3" onChange={nameChangeHandler} value={name}>
            <InputGroup.Text id="basic-addon1">
              <img style={{ width: "2rem" }} src={personlogo} alt="personlogo" />
            </InputGroup.Text>
            <FormControl placeholder="Person name" aria-label="Username" aria-describedby="basic-addon1" value={name} />
          </InputGroup>

          <Button variant="outline-success" onClick={sendDataHandler}>
            Update
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Picture;
