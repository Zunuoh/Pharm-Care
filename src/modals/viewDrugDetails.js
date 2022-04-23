import React from "react";
import {useSelector} from 'react-redux';
import { getDrug } from "../features/drug-reducer";

const ViewDrugDetails = (props) => {
  const drug = useSelector(getDrug);

  if (!props.show) {
    return null;
  }
  return (
    <div className="modalBackground">
      <div className="viewModalContainer">
        <div className="title">
          <h4 className="modalTitle">VIEW DRUG DETAILS</h4>
        </div>

        <div className="modalBody">
          <div>
            <form>
              <div className="viewLabelContainer">
                <label className="viewModalLabel">Name:</label>
                <div
                  className="viewDetail"
                  name="viewName"
                >{drug.name ?? "N/A"}</div>
                  
              
              </div>
              {drug.prices.map((price) =>{
                return(
                  <div className="viewLabelContainer">
                  <label className="viewModalLabel">Price on {new Date(price.date).toISOString().substring(0,10)}:</label>
                  <div className="viewDetail">GHC {price.price}</div>
                </div>
  
                )
              })}
             
            </form>
          </div>
        </div>

        <div className="footer">
          <button onClick={props.onClose} className="declineModalButton">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDrugDetails;
