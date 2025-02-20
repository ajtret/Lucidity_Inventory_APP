import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, disableProduct } from "../Redux/actions";
import InventoryModal from "./InventoryModal";
import { MdDelete, MdEdit, MdOutlineRemoveRedEye } from "react-icons/md"
import { FaRegEyeSlash } from "react-icons/fa";
import "./InventoryTable.css";

const InventoryTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const isAdmin = useSelector((state) => state.isAdmin);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (product) => {
    if (!product?.disabled && isAdmin) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const handleDelete = (product) => {
    if (!product?.disabled && isAdmin) {
      dispatch(deleteProduct(product))
    }
  }

  const handleDisable = (product) => {
    if (isAdmin) {
      dispatch(disableProduct(product))
    }
  }


  return (
    <div className="inventory-container">
      <table className="table">
        <thead>
          <tr>
            <th><button className="table-btn"> Name </button> </th>
            <th><button className="table-btn"> Category </button></th>
            <th><button className="table-btn"> Price </button></th>
            <th><button className="table-btn"> Quantity </button></th>
            <th><button className="table-btn"> Value </button></th>
            <th><button className="table-btn"> Actions </button></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name} className={product?.disabled ? "disabled" : ""}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price.replace('$', '')}</td>
              <td>{product.quantity}</td>
              <td>${parseFloat(product.price.replace('$', '')) * parseFloat(product.quantity)}</td>
              <td>
                <button className={isAdmin ? "action-button-edit" : "disabled"}
                  onClick={() => handleEdit(product)}>
                  <MdEdit />
                </button>
                <button className={isAdmin ? "action-button-disable" : "disabled"}
                  onClick={() => dispatch(handleDisable(product))} >
                  {!product?.disabled ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                </button>
                <button className={isAdmin ? "action-button-delete" : "disabled"}
                  onClick={() => handleDelete(product)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <InventoryModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
};

export default InventoryTable;
