import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addDrug } from "../features/drug-reducer";
import { toast } from "react-toastify";

toast.configure();
const AddDrug = (props) => {
  const [drugName, setDrugName] = useState();
  const [drugPrice, setDrugPrice] = useState();
  const dispatch = useDispatch();

  const resetInput = useCallback(() => {
    setDrugName?.(undefined);
    setDrugPrice?.(undefined);
  }, [setDrugName, setDrugPrice]);

  const handleAddDrugSubmit = useCallback(() => {
    try {
      dispatch(
        addDrug({
          id: Date.now(),
          name: drugName,
          prices: [
            {
              id: Date.now(),
              price: drugPrice,
              date: new Date().toLocaleDateString(),
            },
          ],
        })
      );
      toast.success("Drug added successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      resetInput();
      props.onClose();
    } catch (error) {
      toast.success("Sorry, drug could not be added", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  }, [dispatch, props, drugName, drugPrice, resetInput]);

  if (!props.show) {
    return null;
  }

  return (
    <form className="modalBackground" onSubmit={handleAddDrugSubmit}>
      <div className="modalContainer">
        <div className="title">
          <h4 className="modalTitle">ADD DRUG</h4>
        </div>

        <div className="modalBody">
          <div>
            <label className="modalLabel">Name of Drug:</label>
            <input
              type="text"
              placeholder="Eg: Paracetamol"
              className="modalActionName"
              name="drugName"
              value={drugName}
              onChange={(e) => setDrugName(e.target.value)}
              required
            />

            <label className="modalLabel">Price:</label>
            <input
              type="number"
              className="modalActionName"
              placeholder="Eg: GHC 20"
              name="drugPrice"
              value={drugPrice}
              onChange={(e) => setDrugPrice(e.target.value)}
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

export default AddDrug;
