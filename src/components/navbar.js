import React from "react";
import { filterName, filterType, filterStock } from "../actions";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";

const navbar = props => {
  return (
    <Route>
      <nav className="border fixed split-nav">
        <div className="nav-brand">
          <Link to="/">
            <h3>My Shopping Card</h3>
          </Link>
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="search"
            placeholder="Search by Name"
            style={{ marginRight: "30px" }}
            onChange={e => {
              props.filterName(e.target.value);
            }}
          />
          <select
            style={{ marginRight: "30px" }}
            onChange={e => {
              props.filterType(e.target.value);
            }}
          >
            <option>Category</option>
            <option>shoes</option>
            <option>hats</option>
            <option>watchs</option>
          </select>
          <div style={{ marginTop: "17px", display: "flex" }}>
            <input
              type="radio"
              name="stock"
              style={{ marginRight: "0" }}
              onChange={e => {
                props.filterStock("in");
              }}
            />{" "}
            In stock
            <input
              type="radio"
              name="stock"
              style={{ marginLeft: "30px" }}
              onChange={e => {
                props.filterStock("out");
              }}
            />{" "}
            Out of stock
            <input
              type="radio"
              name="stock"
              style={{ marginLeft: "30px" }}
              defaultChecked
              onChange={e => {
                props.filterStock("all");
              }}
            />{" "}
            All
          </div>
        </div>

        <div className="collapsible">
          <input id="collapsible1" type="checkbox" name="collapsible1" />
          <button>
            <label htmlFor="collapsible1">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </label>
          </button>
          <div className="collapsible-body">
            <Link to="/myshopping">
              <ul className="inline">
                <li>
                  <i className="fas fa-shopping-cart">
                    <span
                      style={{
                        backgroundColor: "rgba(242, 38, 19, 0.7)",
                        borderRadius: "50%",
                        padding: "3px",
                        color: "white"
                      }}
                    >
                      {props.articlesbought}
                    </span>
                  </i>
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </nav>
    </Route>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    filterName: filter => dispatch(filterName(filter)),
    filterType: filter => dispatch(filterType(filter)),
    filterStock: filter => dispatch(filterStock(filter))
  };
}
const mapStateToProps = state => {
  return {
    articlesbought: state.selledarticle.length
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navbar);
