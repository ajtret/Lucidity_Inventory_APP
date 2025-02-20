import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./Redux/store";
import { fetchInventory } from "./Redux/actions";
import InventoryTable from "./components/InventoryTable";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

const MainApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  return (
    <div style={{backgroundColor: 'black'}}>
      <Navbar/>
      <Stats/>
      <InventoryTable />
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

export default App;