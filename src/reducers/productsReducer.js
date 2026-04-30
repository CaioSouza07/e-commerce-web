function productsReduces(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
        ),
      };
    case "FILTER":
      return { ...state, filter: action.payload };
  }
}

export default productsReduces;
