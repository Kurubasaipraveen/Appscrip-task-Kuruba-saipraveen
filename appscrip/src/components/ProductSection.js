import { useState } from 'react';
import React from 'react';
import '../styles/ProductPage.css';

const ProductSection = () => {
  const [showFilters, setShowFilters] = useState(true);

  
  const products = [
    {
      id: 1,
      name: "PPXOC Milkyway dress in pressed flowers",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723267307/quvcghofrowltchb9col.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 2,
      name: "Elegant Evening Gown",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268258/nlwbveq4l3gpnukm4zdc.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 3,
      name: "Casual Summer Dress",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268253/aifr9wr2prcdaw1nteh7.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 4,
      name: "PPXOC Milkyway dress in pressed flowers",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268258/kcspziqfgh5qg4fazznk.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 5,
      name: "Elegant Evening Gown",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268258/ehf7oh6cpx1wdtuwgdje.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 6,
      name: "Casual Summer Dress",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268258/ubhh1xskwkxbvxwgegtn.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 7,
      name: "PPXOC Milkyway dress in pressed flowers",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268255/w86vak29dhye4dsxkjlz.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 8,
      name: "Elegant Evening Gown",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268255/dqpskgzw6fqq12xmvkzc.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 9,
      name: "Casual Summer Dress",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268255/sjjc2vckx8oisfeemfps.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 10,
      name: "PPXOC Milkyway dress in pressed flowers",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268255/pkjvacgwbtom3lz9isc6.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id:11,
      name: "Elegant Evening Gown",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268254/hoel497opcg58wtesuxv.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 12,
      name: "Casual Summer Dress",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268253/kpspkjcnahnjhoqjd0cv.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 13,
      name: "PPXOC Milkyway dress in pressed flowers",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268253/aifr9wr2prcdaw1nteh7.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 14,
      name: "Elegant Evening Gown",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723267307/quvcghofrowltchb9col.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 15,
      name: "Casual Summer Dress",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268258/nlwbveq4l3gpnukm4zdc.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 16,
      name: "PPXOC Milkyway dress in pressed flowers",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268253/kpspkjcnahnjhoqjd0cv.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 17,
      name: "Elegant Evening Gown",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268253/kpspkjcnahnjhoqjd0cv.png",
      description: "SignIn or Create an Account to See Prices"
    },
    {
      id: 18,
      name: "Casual Summer Dress",
      image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1723268255/sjjc2vckx8oisfeemfps.png",
      description: "SignIn or Create an Account to See Prices"
    },
    
  ];
  const [favoritedProducts, setFavoritedProducts] = useState(new Set());

  const handleFavoriteClick = (productId) => {
    setFavoritedProducts((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <section className="product-section">
      <h1>Discover Our Products</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br/>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      <div className="recomended-item">
                <label htmlFor="recamended-for">RECOMMENDED     </label>
                <select id="recamended-for">
                  <option>NEW FIRST</option>
                  <option>POPULAR</option>
                  <option>PRICE : HIGHT-LOw</option>
                  <option>PRICE : LOW-HIGH</option>
                </select>
              </div>
      <div className="main-content">
        <aside className="filter-section">
          <div className="filter-buttons">
            <button 
              className="toggle-filters-btn" 
              onClick={() => setShowFilters(true)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: showFilters ? 'grey' : 'blue',
                display: showFilters ? 'none' : 'inline-block',
                marginRight: '10px',
              }}
            >
              Show Filters
            </button>
            <button 
              className="toggle-filters-btn" 
              onClick={() => setShowFilters(false)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: showFilters ? 'blue' : 'grey',
                display: showFilters ? 'inline-block' : 'none',
              }}
            >
              Hide Filters
            </button>
          </div>

          {showFilters && (
            <>
              <div className="filter-item">
                <input type="checkbox" id="customizable" />
                <label htmlFor="customizable">Customizable</label>
              </div>
              
              <div className="filter-item">
                <label htmlFor="ideal-for">Ideal For</label>
                <select id="ideal-for">
                  <option>All</option>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option>
                </select>
              </div>
              
              <div className="filter-item">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                  <option>All</option>
                  <option>Casual</option>
                  <option>Formal</option>
                  <option>Party</option>
                </select>
              </div>
              
              <div className="filter-item">
                <label htmlFor="fabric">Fabric</label>
                <select id="fabric">
                  <option>All</option>
                  <option>Cotton</option>
                  <option>Silk</option>
                  <option>Denim</option>
                </select>
              </div>
              
              <div className="filter-item">
                <label htmlFor="segment">Segment</label>
                <select id="segment">
                  <option>All</option>
                  <option>Premium</option>
                  <option>Standard</option>
                  <option>Budget</option>
                </select>
              </div>
              
              <div className="filter-item">
                <label htmlFor="pattern">Pattern</label>
                <select id="pattern">
                  <option>All</option>
                  <option>Striped</option>
                  <option>Plain</option>
                  <option>Checked</option>
                </select>
              </div>
            </>
          )}
        </aside>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p className="product-name">{product.name}</p>
              <p className='product-decription'>{product.description}
              <span
                className={`favorite-icon ${favoritedProducts.has(product.id) ? 'favorited' : ''}`}
                onClick={() => handleFavoriteClick(product.id)}
              />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
