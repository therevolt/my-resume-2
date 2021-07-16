const SpanMenu = (props) => {
  return (
    <span
      id={props.id}
      className={
        props.fireEvent === props.id
          ? "my-1 mx-1 py-1 active"
          : "my-1 mx-1 py-1"
      }
      onClick={props.handleClick}
    >
      {props.text}
    </span>
  );
};

export default SpanMenu;
