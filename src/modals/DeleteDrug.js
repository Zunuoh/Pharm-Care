import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDrug, getDrug } from "../features/drug-reducer";
import { toast } from "react-toastify";

const DeleteDrug = (props) => {
  const drug = useSelector(getDrug);
  const dispatch = useDispatch();

  const handleDeleteDrugSubmit = useCallback(() => {
    dispatch(deleteDrug({}));
    toast.success("Drug deleted successfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
    props.onClose?.();
  }, [dispatch, props]);

  if (!props.show) {
    return null;
  }
  return (
    <div className="modalBackground">
      <div className="deleteModalContainer">
        <div className="title">
          <h4 className="modalTitle">DELETE DRUG</h4>
        </div>

        <div className="modalBody">
          <div>
            <form>
              <label className="modalLabel">
                Are you sure you want to delete {drug.name}?
              </label>
            </form>
          </div>
        </div>

        <div className="footer">
          <button
            type="submit"
            className="acceptModalButton"
            onClick={handleDeleteDrugSubmit}
          >
            Yes
          </button>
          <button
            onClick={() => props.onClose?.()}
            className="declineModalButton"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDrug;
