import { useState } from "react";
import "./MenuItem.css";
import editIcon from "../../assets/edit.png";
import delIcon from "../../assets/del.png";

export default function MenuItem({ id, name, price, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);

  const handleSave = () => {
    onEdit(id, newName, parseFloat(newPrice));
    setIsEditing(false);
  };

  return (
    <li className="item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="number"
            step="0.01"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <span className="item-name">{name}</span>
          <span className="item-price">{price.toFixed(2)}€</span>
          <div className="item-actions">
            <button
              className="icon-btn"
              onClick={() => setIsEditing(true)}
              title="Editar producto"
            >
              <img src={editIcon} alt="Editar" className="icon" />
            </button>
            <button
              className="icon-btn"
              onClick={() => onDelete(id)}
              title="Eliminar producto"
            >
              <img src={delIcon} alt="Eliminar" className="icon" />
            </button>
          </div>
        </>
      )}
    </li>
  );
}
