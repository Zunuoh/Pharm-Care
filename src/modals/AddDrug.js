import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addDrug } from "../features/drug-reducer";
import { toast } from "react-toastify";

toast.configure();
const AddDrug = (props) => {
  const [drugName, setDrugName] = useState();
  const [drugPrice, setDrugPrice] = useState();
  const [dateDrugWasStocked, setDateDrugWasStocked] = useState("");
  const dispatch = useDispatch();
  const resetInput = () => {
    setDrugName?.(undefined);
    setDrugPrice?.(undefined);
  };

  // const handleAddDrugSubmit = useCallback(
  //   () => {
  //    try {
  //     dispatch(
  //       addDrug({
  //         id: Date.now(),
  //         name: drugName,
  //         prices: [
  //           {
  //             id: Date.now(),
  //             price: drugPrice,
  //             date: new Date().toLocaleDateString(),
  //           },
  //         ],
  //       })
  //     );
  //     toast.success("Drug added successfully", {
  //       position: toast.POSITION.TOP_CENTER,
  //       autoClose: 3000,
  //     });
  //     resetInput();
  //     props.onClose();
  //    } catch (error) {
  //      toast.error("Could not add drug",  {
  //       position: toast.POSITION.TOP_CENTER,
  //       autoClose: 3000,
  //     })
  //    }
  //   },
  //   [dispatch, props.onClose],
  // );


  // const handleAddDrugSubmit = useCallback(
  //   () => {
  //     dispatch(
  //       addDrug({
  //         id: Date.now(),
  //         name: drugName,
  //         prices: [
  //           {
  //             id: Date.now(),
  //             price: drugPrice,
  //             date: new Date().toLocaleDateString()
  //           }
  //         ]
  //       })
  //     );
  //     toast.success("Drug added successfully", {
  //       position: toast.POSITION.TOP_CENTER,
  //       autoClose: 1000
  //     });
  //     props.onClose()
  //   },
  //   [dispatch, props.onClose],
  // )
  
  const handleAddDrugSubmit = () => {
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
    resetInput()
    props.onClose();
   } catch (error) {
    toast.success("Sorry, drug could not be added", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
   }
  };


  if (!props.show) {
    return null;
  }

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
                value={drugName}
                onChange={(e) => setDrugName(e.target.value)}
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
            </form>
          </div>
        </div>

        <div className="footer">
          <button
            type="button"
            className="acceptModalButton"
            onClick={handleAddDrugSubmit}
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
