import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { getDrug, updateDrug } from "../features/drug-reducer";
import { toast } from "react-toastify";

const EditDrug = ({ id, ...props }) => {
  const drug = useSelector(getDrug);
  const [editName, setEditName] = useState();
  const [editPrice, setEditPrice] = useState();
  const dispatch = useDispatch();

  const resetInput = useCallback(() => {
    setEditName?.(undefined);
    setEditPrice?.(undefined);
  }, [setEditName, setEditPrice]);

  const handleEditDrugSubmit = useCallback(() => {
    dispatch(
      updateDrug({
        name: editName ?? drug?.name,
        price: editPrice ?? _.last(_.sortBy(drug?.prices, "date")).price,
        changed:
          editPrice === _.last(_.sortBy(drug?.prices, "date")).price
            ? false
            : true,
      })
    );
    resetInput();
    toast.success("Drug edited successfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
    props.onClose?.();
  }, [dispatch, resetInput, props, drug, editName, editPrice]);

  if (!props.show) {
    return null;
  }

  return (
    <form className="modalBackground" onSubmit={handleEditDrugSubmit}>
      <div className="modalContainer">
        <div className="title">
          <h4 className="modalTitle">EDIT DRUG</h4>
        </div>

        <div className="modalBody">
          <div>
            <label className="modalLabel">Name of Drug:</label>
            <input
              type="text"
              placeholder="Eg: Paracetamol"
              className="modalActionName"
              name="drugName"
              value={editName ?? drug?.name}
              onChange={(e) => setEditName?.(e.target.value)}
              required
            />

            <label className="modalLabel">Price:</label>
            <input
              type="number"
              className="modalActionName"
              placeholder="Eg: GHC 20"
              value={editPrice ?? _.last(_.sortBy(drug?.prices, "date"))?.price}
              onChange={(e) => setEditPrice?.(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="footer">
          <button type="submit" className="acceptModalButton">
            Save
          </button>
          <button
            onClick={() => props.onClose?.()}
            className="declineModalButton"
          >
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditDrug;
