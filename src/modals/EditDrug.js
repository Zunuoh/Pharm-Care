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

  const resetInput = () => {
    setEditName?.(undefined);
    setEditPrice?.(undefined);
  };

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
  }, [dispatch, resetInput, props.onClose]);

  if (!props.show) {
    return null;
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h4 className="modalTitle">EDIT DRUG</h4>
        </div>

        <div className="modalBody">
          <div>
            <form>
              <label className="modalLabel">Name of Drug:</label>
              <input
                type="text"
                placeholder="Eg: Paracetamol"
                className="modalActionName"
                name="drugName"
                value={editName ?? drug?.name}
                onChange={(e) => setEditName?.(e.target.value)}
              />

              <label className="modalLabel">Price:</label>
              <input
                type="number"
                className="modalActionName"
                placeholder="Eg: GHC 20"
                value={
                  editPrice ?? _.last(_.sortBy(drug?.prices, "date"))?.price
                }
                onChange={(e) => setEditPrice?.(e.target.value)}
              />
            </form>
          </div>
        </div>

        <div className="footer">
          <button
            type="submit"
            className="acceptModalButton"
            onClick={handleEditDrugSubmit}
          >
            Edit
          </button>
          <button onClick={props.onClose} className="declineModalButton">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDrug;
