import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../Redux/actions"
import { ImCross } from "react-icons/im";
import "./InventoryModal.css";

const InventoryModal = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    category: product.category || "",
    quantity: product.quantity,
    price: product.price,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    dispatch(updateProduct(editedProduct))
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div style={{ display: "flex", justifyContent:"space-between" }}>
          <div>
            <h2>Edit Product</h2>
            <p className="product-name">{product.name}</p>
          </div>
          <ImCross onClick={onClose} className="Imcross" />
        </div>
        <div className="modal-row">
          <div className="modal-field">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={editedProduct.category}
              onChange={handleChange}
              placeholder="Category"
              disabled
            />
          </div>
          <div className="modal-field">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={parseFloat(editedProduct.price.replace('$', ''))}
              onChange={handleChange}
              placeholder="Price"
            />
          </div>
        </div>
        <div className="modal-row">
          <div className="modal-field">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={editedProduct.quantity}
              onChange={handleChange}
              placeholder="Quantity"
            />
          </div>
          <div className="modal-field">
            <label>Value</label>
            <input
              type="number"
              name="Value"
              value={parseFloat(editedProduct.price.replace('$', '')) * parseFloat(editedProduct.quantity)}
              onChange={handleChange}
              disabled
            />
          </div>
        </div>
        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryModal;