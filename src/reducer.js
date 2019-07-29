import { articles } from "./data";
const initialState = {
  articles,
  filtername: "",
  filtertype: "Category",
  filterdispo: "",
  selledarticle: []
};
const rootReducer = (state = initialState, action) => {
  if (action.type === "FILTER_NAME") {
    return { ...state, filtername: action.payload };
  } else if (action.type === "FILTER_TYPE") {
    return { ...state, filtertype: action.payload };
  } else if (action.type === "FILTER_STOCK") {
    return { ...state, filterdispo: action.payload };
  } else if (action.type === "BUY_ARTICLE") {
    return {
      ...state,
      selledarticle:
        state.selledarticle.filter(el => el.id === action.payload.id).length > 0
          ? state.selledarticle.map(el =>
              el.id === action.payload.id ? { ...el, qt: el.qt + 1 } : el
            )
          : [...state.selledarticle, action.payload]
    };
  } else if (action.type === "ADD_ARTICLE") {
    return {
      ...state,
      selledarticle: state.selledarticle.map((el, i) =>
        i === action.payload ? { ...el, qt: el.qt + 1 } : el
      )
    };
  } else if (action.type === "MINUS_ARTICLE") {
    return {
      ...state,
      selledarticle: state.selledarticle.map((el, i) =>
        i === action.payload && el.qt > 0 ? { ...el, qt: el.qt - 1 } : el
      )
    };
  } else if (action.type === "CONFIRM_ORDER") {
    return {};
  } else if (action.type === "DELETE_ARTICLE") {
    return {
      ...state,
      selledarticle: state.selledarticle.filter(el => el.id !== action.payload)
    };
  }
  return state;
};

export default rootReducer;
