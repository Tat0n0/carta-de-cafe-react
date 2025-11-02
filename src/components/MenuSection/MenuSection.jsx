import "./MenuSection.css";
import MenuItem from "../MenuItem/MenuItem.jsx";
import editIcon from "../../assets/edit.png";
import delIcon from "../../assets/del.png";
import { useState } from "react";

export default function MenuSection({
  id,
  name,
  iconUrl,
  items,
  onDeleteCategory,
  onEditCategory,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedIcon, setEditedIcon] = useState(iconUrl);
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [productList, setProductList] = useState(items);

  const handleSave = () => {
    onEditCategory(id, editedName, editedIcon);
    setIsEditing(false);
  };

  const addProduct = () => {
    if (!newProductName || !newProductPrice) return;
    const newProduct = {
      id: Date.now(),
      name: newProductName,
      price: parseFloat(newProductPrice),
    };
    setProductList([...productList, newProduct]);
    setNewProductName("");
    setNewProductPrice("");
  };

  const deleteProduct = (productId) => {
    const product = productList.find((p) => p.id === productId);
    if (!product) return;

    const confirmDelete = window.confirm(
      `¿Seguro que quieres eliminar el producto "${product.name}"?`
    );

    if (!confirmDelete) return;

    setProductList(productList.filter((p) => p.id !== productId));

    alert(`Producto "${product.name}" eliminado correctamente.`);
  };

  const editProduct = (productId, newName, newPrice) => {
    setProductList(
      productList.map((p) =>
        p.id === productId ? { ...p, name: newName, price: newPrice } : p
      )
    );
  };

  return (
    <section className="section">
      <div className="section-header">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="edit-input"
            />
            <input
              type="url"
              value={editedIcon}
              onChange={(e) => setEditedIcon(e.target.value)}
              className="edit-input"
            />
            <button onClick={handleSave} className="save-btn">
              Guardar
            </button>
            <button onClick={() => setIsEditing(false)} className="cancel-btn">
              Cancelar
            </button>
          </>
        ) : (
          <>
            <h2 className="section-title">
              <span>{name}</span>
              <img src={iconUrl} alt="" className="section-icon" />
            </h2>
            <div className="section-actions">
              <button
                className="icon-btn"
                title="Editar categoría"
                onClick={() => setIsEditing(true)}
              >
                <img src={editIcon} alt="Editar" className="icon" />
              </button>
              <button
                className="icon-btn"
                title="Eliminar categoría"
                onClick={() => onDeleteCategory(id)}
              >
                <img src={delIcon} alt="Eliminar" className="icon" />
              </button>
            </div>
          </>
        )}
      </div>

      <ul className="items">
        {productList.map((it) => (
          <MenuItem
            key={it.id}
            id={it.id}
            name={it.name}
            price={it.price}
            onDelete={deleteProduct}
            onEdit={editProduct}
          />
        ))}
      </ul>

      <div className="product-form">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          step="0.01"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
        />
        <button onClick={addProduct} className="add-product-btn">
          Nuevo
        </button>
      </div>
    </section>
  );
}
