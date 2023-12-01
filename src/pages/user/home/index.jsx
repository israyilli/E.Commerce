import React from "react";

function Home() {
  return (
    <>
      <section className="mountainImg">
        <div>
          <h1>EARTH</h1>
          <h4>MULTIPURPOSE STORE</h4>
          <button>SHOP NOW</button>
        </div>
      </section>
      <section className="homeCards">
        <div className="container">
          <div className="cards">
            <div className="card1">
              <div className="imgWrapper">
                <img src="" alt="" />
              </div>
              <div className="article">
                <h6 className="posters">Posters</h6>
                <h4>Poster V1</h4>
                <h5>$23.99</h5>
              </div>
            </div>

            <div className="card2">
              <div className="imgWrapper">
                <img src="" alt="" />
              </div>
              <div className="article">
                <h6 className="posters">Posters</h6>
                <h4>Poster V1</h4>
                <h5>$23.99</h5>
              </div>
            </div>

            <div className="card3">
              <div className="imgWrapper">
                <img src="" alt="" />
              </div>
              <div className="article">
                <h6 className="posters">Posters</h6>
                <h4>Poster V1</h4>
                <h5>$23.99</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="container">
          <h1>What Our Customers Say</h1>
          <div className="comments">
            <div className="box">
              Icon
              <p>
                Fast shipping and excellent customer service. The product was
                even better than expected. I will definitely be a returning
                customer.
              </p>
              <div className="imgWrapper">
                <img src="" alt="" />
              </div>
              <span>JENNIFER LEWIS</span>
            </div>
            <div className="box">
              Icon
              <p>
                Great user experience on your website. I found exactly what I
                was looking for at a great price. I will definitely be telling
                my friends.
              </p>
              <div className="imgWrapper">
                <img src="" alt="" />
              </div>
              <span>ALICIA HEART</span>
            </div>
            <div className="box">
              Icon
              <p>
                Thank you for the excellent shopping experience. It arrived
                quickly and was exactly as described. I will definitely be
                shopping with you again in the future.
              </p>
              <div className="imgWrapper">
                <img src="" alt="" />
              </div>
              <span>JUAN CARLOS</span>
            </div>
          </div>
        </div>
      </section>
      <section className="giveTheGift">
        <h1>Give the Gift of a Postcard</h1>
        <h5>Give the gift of a lasting memory with a postcard</h5>
        <button>PURCHASE A POSTCARD</button>
      </section>
      <section className="prefer">
        <div className="container">
          <div className="securePayment">
            Icon
            <div className="article">
              <h4> SECURE PAYMENT</h4>
              <h3>All our payments our SSL secured</h3>
            </div>
          </div>
          <div className="delivered">
            Icon
            <div className="article">
              <h4> DELIVERED WITH CARE</h4>
              <h3>Super fast shipping to your door</h3>
            </div>
          </div>
          <div className="delivered">
            Icon
            <div className="excellent">
              <h4> EXCELLENT SERVICE</h4>
              <h3>Live chat and phone support</h3>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="footer">
        <div className="bigContainer">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
          <h1>EARTH STORE</h1>
          <h5>Copyright © 2023 Planet Earth Store</h5>
        </div>
      </section>
    </>
  );
}

export default Home;
