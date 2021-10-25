import React from "react";

const Foto = (props) => {
  //backticks
  const imageURL = `https://via.placeholder.com/120x100.png?text=${props.username}`;
  return <img src={props.picture} alt={props.username} width={120} />;
};

const Nombre = (props) => {
  return <div>{props.username}</div>;
};

class NombreC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.username
    };
  }

  componentDidMount() {
    console.debug("Mounting component");
    this.setState({
      age: 4
    });
  }

  componentWillMount() {}

  render() {
    return <div>[{this.props.username}]</div>;
  }
}

const imageStyle = {
  border: "2px solid red",
  fontWeight: "bold",
  width: "120px",
  marginBottom: "10px" // margin-bottom on normal css
};

const Usuario = (props) => {
  return (
    <div style={imageStyle}>
      <Foto username={props.username} picture={props.image} />
      <NombreC username={props.username} />
    </div>
  );
};

export default Usuario;
