import React from "react";

const ViewDrugDetails = (props) => {
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
              <div className='viewLabelContainer'>
              <label className="viewModalLabel">
               Name: 
              </label>
              <div className="viewDetail">ddjkdd</div>
              </div>
             
              <div className='viewLabelContainer'>
              <label className="viewModalLabel">
               Price on 22/3/2000: 
              </label>
              <div className="viewDetail">ddjkdd</div>
              </div>

              <div className='viewLabelContainer'>
              <label className="viewModalLabel">
               Price on 22/3/2000: 
              </label>
              <div className="viewDetail">ddjkdd</div>
              </div>
            </form>
          </div>
        </div>

        <div className="footer">
          <button onClick={props.onClose} className="modalButton">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDrugDetails;
