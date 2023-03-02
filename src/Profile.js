export default function Profile(props) {
  return (
    <div className="flower-element">
      <img src={props.imageUrl} alt={props.alt} />
      <h2> {props.flowerName} </h2>
    </div>
  );
}
