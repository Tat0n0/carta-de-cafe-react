import "./App.css";
import Header from "./components/Header/Header.jsx";
import MenuSection from "./components/MenuSection/MenuSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useState } from "react";
import addIcon from "./assets/add.png";

const initialData = {
  menu: [
    {
      id: 1,
      name: "Coffee",
      photoURL: "https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg",
      products: [
        { id: 1, name: "French Vanilla", price: 3.0 },
        { id: 2, name: "Caramel Macchiato", price: 3.75 },
        { id: 3, name: "Pumpkin Spice", price: 3.5 },
        { id: 4, name: "Hazelnut", price: 4.0 },
        { id: 5, name: "Mocha", price: 4.5 },
      ],
    },
    {
      id: 2,
      name: "Desserts",
      photoURL: "https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg",
      products: [
        { id: 1, name: "Donut", price: 1.5 },
        { id: 2, name: "Cherry Pie", price: 2.75 },
        { id: 3, name: "Cheesecake", price: 3.0 },
        { id: 4, name: "Cinnamon Roll", price: 2.5 },
      ],
    },
  ],
};

export default function App() {
  const [data, setData] = useState(initialData);

  const addCategory = () => {
    const iconUrls = [
      "https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg",
      "https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg",
    ];

    const nextIcon = iconUrls[data.menu.length % iconUrls.length];

    const newCategory = {
      id: Date.now(),
      name: "Nueva Categoría",
      photoURL: nextIcon,
      products: [],
    };

    setData({
      ...data,
      menu: [...data.menu, newCategory],
    });
  };

  const deleteCategory = (categoryId) => {
    const category = data.menu.find((c) => c.id === categoryId);
    if (!category) return;

    if (category.products.length > 0) {
      const confirmDelete = window.confirm(
        `La categoría "${category.name}" tiene ${category.products.length} producto(s). ¿Eliminarla con todos sus productos?`
      );
      if (!confirmDelete) return;
    }

    setData({
      ...data,
      menu: data.menu.filter((c) => c.id !== categoryId),
    });
  };

  const editCategory = (categoryId, newName, newPhotoURL) => {
    setData({
      ...data,
      menu: data.menu.map((c) =>
        c.id === categoryId ? { ...c, name: newName, photoURL: newPhotoURL } : c
      ),
    });
  };

  const deleteProduct = (categoryId, productId) => {
    const category = data.menu.find((c) => c.id === categoryId);
    if (!category) return;

    const product = category.products.find((p) => p.id === productId);
    if (!product) return;

    const confirmDelete = window.confirm(
      `¿Seguro que quieres eliminar el producto "${product.name}" de la categoría "${category.name}"?`
    );

    if (!confirmDelete) return;

    setData({
      ...data,
      menu: data.menu.map((c) =>
        c.id === categoryId
          ? { ...c, products: c.products.filter((p) => p.id !== productId) }
          : c
      ),
    });

    alert(`Producto "${product.name}" eliminado correctamente.`);
  };

  return (
    <div className="page">
      <div className="card">
        <Header
          title="CAMPER CAFÉ"
          subtitle={`Est. ${new Date().getFullYear()}`}
        />

        <hr />

        <button onClick={addCategory} className="add-btn">
          <img src={addIcon} alt="Añadir" className="add-btn-icon" />
          <span>Nueva Categoria</span>
        </button>

        {data.menu.map((category) => (
          <MenuSection
            key={category.id}
            id={category.id}
            name={category.name}
            iconUrl={category.photoURL}
            items={category.products}
            onDeleteCategory={deleteCategory}
            onEditCategory={editCategory}
          />
        ))}

        <hr />

        <Footer
          websiteLabel="Visit our website"
          websiteHref="#"
          address="123 Free Code Camp Drive"
        />
      </div>
    </div>
  );
}
