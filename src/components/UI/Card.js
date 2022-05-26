import "./Card.css";

function card(props) {
  const className = `${props.className} card`;

  return <div className={className}>{props.children}</div>;
}

export default card;
