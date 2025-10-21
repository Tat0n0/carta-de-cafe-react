import "./MenuItem.css";

export default function MenuItem({ name, price }) {
  return (
    <li className="item">
      <span className="item-name">{name}</span>
      <span className="item-price">{price.toFixed(2)}€</span>
    </li>
  );
}
