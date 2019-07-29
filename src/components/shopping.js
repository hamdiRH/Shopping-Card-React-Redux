import React from "react";
import { connect } from "react-redux";
import { addArticle, minusArticle, deletearticle } from "../actions";

const shopping = props => {
  let x = 0;
  for (let i = 0; i < props.articles.length; i++) {
    x += props.articles[i].price * props.articles[i].qt;
  }

  return (
    <div className="container">
      <h1 style={{ marginTop: "150px", marginBottom: "50px" }}>My order</h1>
      <table className="table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Article</th>
            <th>Quantity</th>
            <th>Prices</th>
            <th>Remomve</th>
          </tr>
        </thead>
        <tbody>
          {props.articles.map((el, i) => {
            return (
              <tr key={i}>
                <td>{i}</td>

                <td>
                  <img
                    src={el.img}
                    style={{ height: "50px", width: "50px" }}
                    alt="article"
                  />
                </td>
                <td>
                  <button
                    style={{ marginRight: "30px" }}
                    onClick={() => {
                      props.addarticle(i);
                    }}
                  >
                    +
                  </button>
                  {el.qt}
                  <button
                    style={{ marginLeft: "30px" }}
                    onClick={() => {
                      props.minusarticle(i);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{el.price * el.qt}$</td>
                <td>
                  <button
                    style={{ backgroundColor: "rgba(255,0,0,0.5)" }}
                    onClick={() => {
                      props.deletearticle(el.id);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td />
            <td />
            <td />
            <td>
              <h4 style={{ marginTop: "0" }}>total: {x}</h4>
            </td>
            <td>
              <button>Confirm</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    articles: state.selledarticle,
    state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addarticle: a => dispatch(addArticle(a)),
    minusarticle: m => dispatch(minusArticle(m)),
    deletearticle: x => dispatch(deletearticle(x))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(shopping);
