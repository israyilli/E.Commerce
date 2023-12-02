import React from "react";

function About() {
  return (
    <>
      <section className="mountainImg">
        <div>
          <h1>WHO ARE WE?</h1>
        </div>
      </section>
      <section className="ourMission">
        <div>
          <div>Image</div>
          <div>
            <h1>OUR MISSION</h1>
            <p>
              Hello, my name is Tyler Moore and with the help of many people I
              made this template. I made it so it is super easy to update and so
              that it flows perfectly with my tutorials. Lots of love and
              hundreds of hours went into making it. I hope you love it as much
              as I do.
            </p>
            <p>
              I wish you the best of luck with your business, enjoy the
              adventure.
            </p>
          </div>
        </div>
      </section>
      <section className="giveTheGift">
        <h1>Give the Gift of a Postcard</h1>
        <h5>Give the gift of a lasting memory with a postcard</h5>
        <button>PURCHASE A POSTCARD</button>
      </section>
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

export default About;
