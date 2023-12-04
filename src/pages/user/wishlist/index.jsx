import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { HeartOutlined } from "@ant-design/icons";
import "./../../../assets/style/wishlist.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faLock,
  faBox,
  faHand,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import Icon, { SearchOutlined } from "@ant-design/icons";

function Wishlist() {
  return (
    <>
      <div className="wishlist">
        <hr />
        <h1>Wishlist</h1>
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 4, md: 12 }} spacing={7}>
              <Grid item xs={4}>
                <div className="card">
                  <div className="imgWrapper">
                    <button>
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        style={{ color: "#2C541D", fontSize: "15px" }}
                      />
                    </button>
                    <button className="heart">
                      <HeartOutlined />
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
                    <button className="heart">
                      <HeartOutlined />
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
                    <button className="heart">
                      <HeartOutlined />
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
                    <button className="heart">
                      <HeartOutlined />
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
                    <button className="heart">
                      <HeartOutlined />
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
                    <button className="heart">
                      <HeartOutlined />
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
                    <button className="heart">
                      <HeartOutlined />
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
                    <button className="heart">
                      <HeartOutlined />
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
                    <button className="heart">
                      <HeartOutlined />
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
      <hr />
    </>
  );
}

export default Wishlist;
