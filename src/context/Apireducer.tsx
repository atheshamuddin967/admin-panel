const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_PRODUCTS":
      if (action.payload.products?.length > 0) {
      }

      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export default Reducer;
