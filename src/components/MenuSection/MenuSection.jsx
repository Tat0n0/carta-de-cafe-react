import "./MenuSection.css";
import MenuItem from "../MenuItem/MenuItem.jsx";

export default function MenuSection({ name, iconUrl, items }) {
  return (
    <section className="section">
      <h2 className="section-title">
        <span>{name}</span>
        <img src={iconUrl} alt="" className="section-icon" aria-hidden="true" />
      </h2>
      <ul className="items">
        {items.map((it) => (
          <MenuItem key={it.id} name={it.name} price={it.price} />
        ))}
      </ul>
    </section>
  );
}
