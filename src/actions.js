export const filterName = payload => {
  return { type: "FILTER_NAME", payload };
};
export const filterType = payload => {
  return { type: "FILTER_TYPE", payload };
};
export const filterStock = payload => {
  return { type: "FILTER_STOCK", payload };
};
export const buyArticle = payload => {
  return { type: "BUY_ARTICLE", payload };
};
export const addArticle = payload => {
  return { type: "ADD_ARTICLE", payload };
};
export const minusArticle = payload => {
  return { type: "MINUS_ARTICLE", payload };
};
export const confirmOrder = payload => {
  return { type: "CONFIRM_ORDER", payload };
};
export const deletearticle = payload => {
  return { type: "DELETE_ARTICLE", payload };
};
