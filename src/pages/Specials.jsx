import recipes  from "../components/recipes.js";
import "../styles/menu.css";

export default function Specials() {

    return (
        <div className="menu-container">
          <section className="menu-section">
        <div className="menu-header">
          <h1>This week's specials!</h1>
          <div className="menu-btn">
          <button >Full Menu</button>
          </div>
        </div>

        <div className="cards">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="menu-items">
              <img src={recipe.image} alt="" />
              <div className="menu-content">
                <div className="heading">
                  <h2>{recipe.title}</h2>
                  <h3>{recipe.price}</h3>
                </div>
                <p>{recipe.description}</p>
                <div className="order-btn-wrapper">
                <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order a Delivery
             </button>
              <div className="order-bike">
             <img src="./assets/bike.svg"></img>
             </div>
              </div>
              </div>
              </div>
          ))}
        </div>
        </section>
      </div>
    )
  }


