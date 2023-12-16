import "../../styles/TrendingPlaces.css";
function TrendingPlaces({ img1, img2, img3, head, para }) {
  return (
    <>
      <div className="trending-places">
        <div className="trending-places-img">
          <div>
            <img
              src={img1}
              style={{
                width: "178px",
                height: "192px",
                borderRadius: "8px 0px 0px 8px",
                border: "1px solid white",
              }}
            />
          </div>
          <div>
            <div>
              <img
                src={img2}
                style={{
                  width: "135px",
                  height: "94px",
                  borderRadius: "0px 8px 0px 0px",
                  border: "1px solid white",
                }}
              />
            </div>
            <div>
              <img
                src={img3}
                style={{
                  width: "135px",
                  height: "94px",
                  borderRadius: "0px 0px 8px 0px",
                  border: "1px solid white",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="trending-places-name">{head}</h3>
        </div>
        <div>
          <p className="trending-places-details">{para}</p>
        </div>
      </div>
    </>
  );
}

export default TrendingPlaces;
