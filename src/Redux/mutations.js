import { FETCH_INVENTORY, DELETE_PRODUCT, DISABLE_PRODUCT, TOGGLE_ADMIN, UPDATE_PRODUCT } from "./actions";

const initialState = {
  products: [],
  isAdmin: true,
  stats: { totalProducts: 0, totalValue: 0, outOfStock: 0, categories: 0 },
};

const calculateStats = (products) => {
  const actualProducts = products.filter(
    (p) => p.disabled !== true
  );
  const totalProducts = actualProducts.length;
  const totalValue = actualProducts.reduce(
    (acc, product) => acc + parseFloat(product.price.replace('$', '')) * parseFloat(product.quantity),
    0
  );
  const outOfStock = actualProducts.filter((product) => parseFloat(product.quantity) === 0).length;
  const categories = new Set(actualProducts.map((product) => product.category)).size;

  return { totalProducts, totalValue, outOfStock, categories };
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVENTORY:
      return {
        ...state,
        products: action.payload,
        stats: calculateStats(action.payload)
      };

    case UPDATE_PRODUCT:
      const updatedProductsAfterUpdate = state.products.map((p) =>
        p.name === action.payload.name ? action.payload : p)
      return {
        ...state,
        products: updatedProductsAfterUpdate,
        stats: calculateStats(updatedProductsAfterUpdate),
      };

    case DELETE_PRODUCT:
      const updatedProductsAfterDelete = state.products.filter(
        (p) => p.name !== action.payload.name
      );
      return {
        ...state,
        products: updatedProductsAfterDelete,
        stats: calculateStats(updatedProductsAfterDelete),
      };

    case TOGGLE_ADMIN:
      return {
        ...state,
        isAdmin: !state.isAdmin,
      }

    case DISABLE_PRODUCT:
      const disabledProducts = state.products.map((p) => (
        p?.name === action.payload?.name ? { ...p, disabled: !(p.disabled ?? false) } : p
      ))
      return {
        ...state,
        products: disabledProducts,
        stats: calculateStats(disabledProducts),
      }

    default:
      return state;
  }
};

export default inventoryReducer;