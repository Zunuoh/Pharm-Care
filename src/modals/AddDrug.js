import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDrug } from "../features/drug-reducer";
import { toast } from "react-toastify";

toast.configure();
const AddDrug = (props) => {
  const [drugName, setDrugName] = useState("");
  const [drugPrice, setDrugPrice] = useState("");
  const [dateDrugWasStocked, setDateDrugWasStocked] = useState("");
  const dispatch = useDispatch();
  // const drugsList = useSelector((state) => state.drugs.value);

  if (!props.show) {
    return null;
  }

  const onSubmit = () => {
    dispatch(
      addDrug({
        id: Date.now(),
        name: drugName,
        prices: [
          {
            id: Date.now(),
            price: drugPrice,
            date: new Date(dateDrugWasStocked).toLocaleDateString(),
          },
        ],
      })
    );
    toast.success("Drug added successfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
    props.onClose();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h4 className="modalTitle">ADD DRUG</h4>
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
                onChange={(e) => setDrugName(e.target.value)}
              />

              <label className="modalLabel">Price:</label>
              <input
                type="number"
                className="modalActionName"
                placeholder="Eg: GHC 20"
                name="drugPrice"
                onChange={(e) => setDrugPrice(e.target.value)}
              />

              <label className="modalLabel">Date:</label>
              <input
                type="date"
                id="birthday"
                name="drugDate"
                className="calendar"
                onChange={(e) => setDateDrugWasStocked(e.target.value)}
              />
            </form>
          </div>
        </div>

        <div className="footer">
          <button
            type="submit"
            className="acceptModalButton"
            onClick={onSubmit}
          >
            Add
          </button>
          <button onClick={props.onClose} className="declineModalButton">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDrug;
