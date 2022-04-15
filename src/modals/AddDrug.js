import React, { useState } from 'react'

const AddDrug = (props) => {
  const [drugName, setDrugName] = useState("");
  const [drugPrice, setDrugPrice] = useState("");
  const [dateDrugWasStocked, setDateDrugWasStocked] = useState("");

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
            <label className='modalLabel'>
              Name of Drug:
            </label>
            <input
              type="text"
              placeholder='Eg: Paracetamol'
              className="modalActionName"
              name="drugName"
            />

            <label
             className='modalLabel'
            >
              Price:
            </label>
            <input
            type="number"
            className="modalActionName"
            placeholder='Eg: GHC 20'
            />

            <label
             className='modalLabel'
            >
              Date:
            </label>
            <input
            type="number"
            className="modalActionName"
            placeholder='Eg: GHC 20'
            />
          </form>
        </div>
      </div>

      <div className="footer">
        <button
          type="submit"
          className='acceptModalButton'
        >
          Add
        </button>
        <button
          onClick={props.onClose}
          className='declineModalButton'
        >
          Close
        </button>
      </div>
    </div>
  </div>
  )
}

export default AddDrug
