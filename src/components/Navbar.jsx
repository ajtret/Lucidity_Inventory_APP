import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAdmin } from "../Redux/actions";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.isAdmin);

  return (
    <nav className="navbar" style={{ backgroundColor: "black", color: "white", display: "flex", justifyContent: "space-between" }}>
      <h1 style={{ fontSize: 'xxx-large', marginLeft: '35px', marginBottom: '20px' }} >
        Inventory Stats
      </h1>
      <div style={{ display: 'flex', gap: '20px', padding: '20px', marginRight: '30px' }}>
        <p> admin </p>
        {isAdmin ?
          <LiaToggleOffSolid onClick={() => dispatch(toggleAdmin())} style={{ marginTop: '15px', fontSize:'20px' }} /> :
          <LiaToggleOnSolid onClick={() => dispatch(toggleAdmin())} style={{ marginTop: '15px', fontSize:'20px' }} />}
        <p> user </p>
      </div>
    </nav>
  );
};

export default Navbar;