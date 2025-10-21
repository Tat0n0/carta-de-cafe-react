import "./App.css";
import Header from "./components/Header/Header.jsx";
import MenuSection from "./components/MenuSection/MenuSection.jsx";
import Footer from "./components/Footer/Footer.jsx";

const menuData = [
  {
    id: "coffee",
    name: "Coffee",
    iconUrl: "https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg",
    items: [
      { id: "french-vanilla", name: "French Vanilla", price: 3.0 },
      { id: "caramel-macchiato", name: "Caramel Macchiato", price: 3.75 },
      { id: "pumpkin-spice", name: "Pumpkin Spice", price: 3.5 },
      { id: "hazelnut", name: "Hazelnut", price: 4.0 },
      { id: "mocha", name: "Mocha", price: 4.5 },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    iconUrl: "https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg",
    items: [
      { id: "donut", name: "Donut", price: 1.5 },
      { id: "cherry-pie", name: "Cherry Pie", price: 2.75 },
      { id: "cheesecake", name: "Cheesecake", price: 3.0 },
      { id: "cinnamon-roll", name: "Cinnamon Roll", price: 2.5 },
    ],
  },
];

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <Header
          title="CAMPER CAFÉ"
          subtitle={`Est. ${new Date().getFullYear()}`}
        />

        <hr />

        {menuData.map((section) => (
          <MenuSection
            key={section.id}
            name={section.name}
            iconUrl={section.iconUrl}
            items={section.items}
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
