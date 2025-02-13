import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "50px", TextTransform: "uppercase" };
  const style = {};
  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza Company</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const pizzaNum = pizzas.length;
  return (
    <main className="menu">
      <h2>OUR MENU</h2>

      {pizzaNum > 0 ? (
        <>
          <p>
            Authentic Italian pizza made with love and passion. We have a total
            of 6 dishes on our menu.all organic and fresh ingredients.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working for our menu. Please comeback later.</p>
      )}
      {/* <Pizza
name="Pizza Spinaci"
ingredient="Tomato, mozarella, spinach, and ricotta cheese"
photoName="pizzas/spinaci.jpg"
price={10}
/>
<Pizza
name="Pizza Funghi"
ingredient="Tomato, mozarella, mushrooms, and onion"
photoName="pizzas/funghi.jpg"
price={100}
/> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>pizzaObj.price</span>} */}
        <span>
          {pizzaObj.soldOut ? "SOLD OUT" : `Price: ${pizzaObj.price}`}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 8;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  console.log(isOpen);

  // if (hour >= openhour && hour <= closehour) alert("We are currently opened.");
  // else alert("We are currently closed");

  // if (!isOpen) return <p className="order">CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closehour={closehour} />
      ) : (
        <p className="order">
          © We are Happy to welcome you here between {openhour} and {closehour}{" "}
          come visit us and order online.
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "© We are currently Open");
}

function Order(props) {
  return (
    <div className="order">
      <p>
        © We are open until {props.closehour}:00 come visit us and order online.{" "}
      </p>
      <button className="btn">Order </button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
