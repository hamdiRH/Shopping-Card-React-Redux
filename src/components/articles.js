import React from "react";
import { connect } from "react-redux";
import { buyArticle } from "../actions";

const filterarticles = (articles, filter) => {
  const { filtername, filtertype, filterdispo } = filter;
  let arr = articles;
  arr = arr.filter(el => el.type.includes(filtername));
  if (filtertype !== "Category") {
    arr = arr.filter(el => el.type === filtertype);
  }
  if (filterdispo === "out") {
    arr = arr.filter(el => el.qt === 0);
  }
  if (filterdispo === "in") {
    arr = arr.filter(el => el.qt > 0);
  }

  return arr;
};

const article = ({ articles, buyArticle, filter }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "75px" }}>
      {filterarticles(articles, filter).map((el, i) => (
        <div
          style={{
            padding: "1.5%"
          }}
          key={i}
        >
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={el.img}
              alt="articles"
              style={{ width: "15rem", height: "12rem", margin: "auto" }}
            />

            <div className="card-body">
              <h4 className="card-title">{el.type.slice(0, -1)}</h4>
              <h5
                className="card-subtitle"
                style={{ color: el.qt > 0 ? "green" : "red" }}
              >
                {el.qt > 0 ? "En stock" : "N'est pas en stock"} ( {el.qt} )
              </h5>
              <p className="card-text">{el.price}$</p>
              {el.qt === 0 ? (
                <button disabled>Buy</button>
              ) : (
                <button
                  onClick={() => {
                    buyArticle({ ...el, qt: 1 });
                  }}
                >
                  Buy
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    articles: state.articles,
    filter: { ...state }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyArticle: buy => dispatch(buyArticle(buy))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(article);
