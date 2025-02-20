export const FETCH_INVENTORY = "FETCH_INVENTORY";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DISABLE_PRODUCT = "DISABLE_PRODUCT";
export const TOGGLE_ADMIN = "TOGGLE_ADMIN";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const fetchInventory = () => async (dispatch) => {
  const response = await fetch("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory");
  const data = await response.json();
  dispatch({ type: FETCH_INVENTORY, payload: data });
};

export const deleteProduct = (product) => ({ type: DELETE_PRODUCT, payload: product });
export const updateProduct = (product) => ({ type: UPDATE_PRODUCT, payload: product });
export const toggleAdmin = () => ({ type: TOGGLE_ADMIN });
export const disableProduct = (product) => ({ type: DISABLE_PRODUCT, payload: product });

