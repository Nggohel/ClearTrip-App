import "./../../styles/Hotelpage.css";

function TophotelCard({
  hotelimg,
  ratinglogo,
  rating1,
  rating2,
  rating3,
  rating4,
  rating5,
  head,
  city,
}) {
  return (
    <>
      <div className="hotels-great-deals-card">
        <a
          href="/hotels/info/ramada-plaza-agra-740589"
          target="_blank"
          style={{ display: "flex", textDecoration: "none" }}
        >
          <div>
            <img
              src={hotelimg}
              className="hotel-deal-img"
              alt="hotel-img"
              loading="lazy"
            />
          </div>
          <div className="hotel-deal-details">
            <h3 className="deal-hotelname">{head}</h3>
            <p className="deal-hotelplace">{city}</p>
            <div className="rating-div">
              <span>
                <img src={ratinglogo} style={{ height: "17px" }} />
                <img src={rating1} style={{ height: "15px", width: "15px" }} />
                <img src={rating2} style={{ height: "15px", width: "15px" }} />
                <img src={rating3} style={{ height: "15px", width: "15px" }} />
                <img src={rating4} style={{ height: "15px", width: "15px" }} />
                <img src={rating5} style={{ height: "15px", width: "15px" }} />
              </span>
              <div style={{ paddingRight: "24px" }}></div>
            </div>
          </div>
        </a>
      </div>
      {/* <div className="hotels-great-deals-card">
          <a
            href="/hotels/info/ramada-plaza-agra-740589"
            target="_blank"
            style={{ display: "flex", textDecoration: "none" }}
          >
            <div>
              <img
                src={dealimg2}
                className="hotel-deal-img"
                alt="hotel-img"
                loading="lazy"
              />
            </div>
            <div className="hotel-deal-details">
              <h3 className="deal-hotelname">Ramada Plaza Agra</h3>
              <p className="deal-hotelplace">Agra</p>
              <div className="rating-div">
                <span>
                  <img src={Ratinglogo} style={{ height: "17px" }} />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Halfratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                </span>
                <div style={{ paddingRight: "24px" }}></div>
              </div>
            </div>
          </a>
        </div>
        <div className="hotels-great-deals-card">
          <a
            href="/hotels/info/ramada-plaza-agra-740589"
            target="_blank"
            style={{ display: "flex", textDecoration: "none" }}
          >
            <div>
              <img
                src={dealimg3}
                className="hotel-deal-img"
                alt="hotel-img"
                loading="lazy"
              />
            </div>
            <div className="hotel-deal-details">
              <h3 className="deal-hotelname">Ramada Plaza Agra</h3>
              <p className="deal-hotelplace">Agra</p>
              <div className="rating-div">
                <span>
                  <img src={Ratinglogo} style={{ height: "17px" }} />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Halfratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                </span>
                <div style={{ paddingRight: "24px" }}></div>
              </div>
            </div>
          </a>
        </div>
        <div className="hotels-great-deals-card">
          <a
            href="/hotels/info/ramada-plaza-agra-740589"
            target="_blank"
            style={{ display: "flex", textDecoration: "none" }}
          >
            <div>
              <img
                src={dealimg4}
                className="hotel-deal-img"
                alt="hotel-img"
                loading="lazy"
              />
            </div>
            <div className="hotel-deal-details">
              <h3 className="deal-hotelname">Ramada Plaza Agra</h3>
              <p className="deal-hotelplace">Agra</p>
              <div className="rating-div">
                <span>
                  <img src={Ratinglogo} style={{ height: "17px" }} />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Halfratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                </span>
                <div style={{ paddingRight: "24px" }}></div>
              </div>
            </div>
          </a>
        </div>
        <div className="hotels-great-deals-card">
          <a
            href="/hotels/info/ramada-plaza-agra-740589"
            target="_blank"
            style={{ display: "flex", textDecoration: "none" }}
          >
            <div>
              <img
                src={dealimg5}
                className="hotel-deal-img"
                alt="hotel-img"
                loading="lazy"
              />
            </div>
            <div className="hotel-deal-details">
              <h3 className="deal-hotelname">Ramada Plaza Agra</h3>
              <p className="deal-hotelplace">Agra</p>
              <div className="rating-div">
                <span>
                  <img src={Ratinglogo} style={{ height: "17px" }} />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Halfratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                </span>
                <div style={{ paddingRight: "24px" }}></div>
              </div>
            </div>
          </a>
        </div>
        <div className="hotels-great-deals-card">
          <a
            href="/hotels/info/ramada-plaza-agra-740589"
            target="_blank"
            style={{ display: "flex", textDecoration: "none" }}
          >
            <div>
              <img
                src={dealimg6}
                className="hotel-deal-img"
                alt="hotel-img"
                loading="lazy"
              />
            </div>
            <div className="hotel-deal-details">
              <h3 className="deal-hotelname">Ramada Plaza Agra</h3>
              <p className="deal-hotelplace">Agra</p>
              <div className="rating-div">
                <span>
                  <img src={Ratinglogo} style={{ height: "17px" }} />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Halfratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                </span>
                <div style={{ paddingRight: "24px" }}></div>
              </div>
            </div>
          </a>
        </div>
        <div className="hotels-great-deals-card">
          <a
            href="/hotels/info/ramada-plaza-agra-740589"
            target="_blank"
            style={{ display: "flex", textDecoration: "none" }}
          >
            <div>
              <img
                src={dealimg7}
                className="hotel-deal-img"
                alt="hotel-img"
                loading="lazy"
              />
            </div>
            <div className="hotel-deal-details">
              <h3 className="deal-hotelname">Ramada Plaza Agra</h3>
              <p className="deal-hotelplace">Agra</p>
              <div className="rating-div">
                <span>
                  <img src={Ratinglogo} style={{ height: "17px" }} />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Halfratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                </span>
                <div style={{ paddingRight: "24px" }}></div>
              </div>
            </div>
          </a>
        </div>
        <div className="hotels-great-deals-card">
          <a
            href="/hotels/info/ramada-plaza-agra-740589"
            target="_blank"
            style={{ display: "flex", textDecoration: "none" }}
          >
            <div>
              <img
                src={dealimg8}
                className="hotel-deal-img"
                alt="hotel-img"
                loading="lazy"
              />
            </div>
            <div className="hotel-deal-details">
              <h3 className="deal-hotelname">Ramada Plaza Agra</h3>
              <p className="deal-hotelplace">Agra</p>
              <div className="rating-div">
                <span>
                  <img src={Ratinglogo} style={{ height: "17px" }} />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Halfratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                </span>
                <div style={{ paddingRight: "24px" }}></div>
              </div>
            </div>
          </a>
        </div>
        <div className="hotels-great-deals-card">
          <a
            href="/hotels/info/ramada-plaza-agra-740589"
            target="_blank"
            style={{ display: "flex", textDecoration: "none" }}
          >
            <div>
              <img
                src={dealimg9}
                className="hotel-deal-img"
                alt="hotel-img"
                loading="lazy"
              />
            </div>
            <div className="hotel-deal-details">
              <h3 className="deal-hotelname">Ramada Plaza Agra</h3>
              <p className="deal-hotelplace">Agra</p>
              <div className="rating-div">
                <span>
                  <img src={Ratinglogo} style={{ height: "17px" }} />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Fullratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                  <img
                    src={Halfratinglogo}
                    style={{ height: "15px", width: "15px" }}
                  />
                </span>
                <div style={{ paddingRight: "24px" }}></div>
              </div>
            </div>
          </a>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default TophotelCard;
