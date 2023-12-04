import React from "react";
import "../../../assets/style/Shop.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { render } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faLock,
  faBox,
  faHand,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import Icon, { SearchOutlined } from "@ant-design/icons";

function Shop() {
  return (
    <>
      <section className="shop">
        <hr />
        <div className="container">
          <div className="left">
            <form action="">
              <input type="text" placeholder="Search products..." />
              <button>
                <SearchOutlined
                  style={{
                    color: "white",
                  }}
                />
              </button>
            </form>

            <div className="filtering">
              <h3>Filter by Price</h3>
              <input type="range" />
              <div className="minMax">
                <span>$10</span>
                <span>$30</span>
              </div>
            </div>

            <div className="categories">
              <h4>Categories</h4>
              <ul>
                <li>
                  Postcards <span>(6)</span>
                </li>
                <li>
                  Posters <span>(6)</span>
                </li>
              </ul>
            </div>
            <div className="recentlyViewed">
              <h3>Recently Viewed</h3>
              <div className="viewed">
                <ul>
                  <li>
                    <div className="imgWrapper">
                      <img
                        src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg"
                        alt=""
                      />
                    </div>
                    <div className="articles">
                      <h3 className="name">Poster V3</h3>
                      <span>$14.99</span>
                    </div>
                  </li>
                  <li>
                    <div className="imgWrapper">
                      <img
                        src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg"
                        alt=""
                      />
                    </div>
                    <div className="articles">
                      <h3 className="name">Poster V1</h3>
                      <span>$23.99</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right">
            <span>Home/ shop</span>
            <h1>Shop</h1>

            <div className="resultsSorting">
              <p>Showing all 12 results</p>

              <div className="sorting">
                <select name="sorting" id="sorting">
                  <option value="Default">Deafult sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="averageRating">Sort by average rating</option>
                  <option value="latest">Sort by latest</option>
                  <option value="lowToHigh">Sort by price:low to high</option>
                  <option value="highToLow">Sort by price:high to low</option>
                </select>
              </div>
            </div>

            <div className="allProducts">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
                  <Grid item xs={4}>
                    <div className="card">
                      <div className="imgWrapper">
                        <button>
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            style={{ color: "#2C541D", fontSize: "15px" }}
                          />
                        </button>
                        <img
                          src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article">
                        <h6 className="posters">Posters</h6>
                        <h4>Poster V1</h4>
                        <h5>$23.99</h5>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={4}>
                    <div className="card">
                      <div className="imgWrapper">
                        <button>
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            style={{ color: "#2C541D", fontSize: "15px" }}
                          />
                        </button>
                        <img
                          src="	https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article">
                        <h6 className="posters">Posters</h6>
                        <h4>Poster V1</h4>
                        <h5>$23.99</h5>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={4}>
                    <div className="card">
                      <div className="imgWrapper">
                        <button>
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            style={{ color: "#2C541D", fontSize: "15px" }}
                          />
                        </button>
                        <img
                          src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article">
                        <h6 className="posters">Posters</h6>
                        <h4>Poster V1</h4>
                        <h5>$23.99</h5>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={4}>
                    <div className="card">
                      <div className="imgWrapper">
                        <button>
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            style={{ color: "#2C541D", fontSize: "15px" }}
                          />
                        </button>
                        <img
                          src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article">
                        <h6 className="posters">Posters</h6>
                        <h4>Poster V1</h4>
                        <h5>$23.99</h5>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="card">
                      <div className="imgWrapper">
                        <button>
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            style={{ color: "#2C541D", fontSize: "15px" }}
                          />
                        </button>
                        <img
                          src="	https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article">
                        <h6 className="posters">Posters</h6>
                        <h4>Poster V1</h4>
                        <h5>$23.99</h5>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="card">
                      <div className="imgWrapper">
                        <button>
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            style={{ color: "#2C541D", fontSize: "15px" }}
                          />
                        </button>
                        <img
                          src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article">
                        <h6 className="posters">Posters</h6>
                        <h4>Poster V1</h4>
                        <h5>$23.99</h5>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="card">
                      <div className="imgWrapper">
                        <button>
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            style={{ color: "#2C541D", fontSize: "15px" }}
                          />
                        </button>
                        <img
                          src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article">
                        <h6 className="posters">Posters</h6>
                        <h4>Poster V1</h4>
                        <h5>$23.99</h5>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="card">
                      <div className="imgWrapper">
                        <button>
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            style={{ color: "#2C541D", fontSize: "15px" }}
                          />
                        </button>
                        <img
                          src="	https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article">
                        <h6 className="posters">Posters</h6>
                        <h4>Poster V1</h4>
                        <h5>$23.99</h5>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="card">
                      <div className="imgWrapper">
                        <button>
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            style={{ color: "#2C541D", fontSize: "15px" }}
                          />
                        </button>
                        <img
                          src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article">
                        <h6 className="posters">Posters</h6>
                        <h4>Poster V1</h4>
                        <h5>$23.99</h5>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </>
  );
}

export default Shop;
