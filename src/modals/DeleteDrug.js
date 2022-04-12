import React from 'react'

const DeleteDrug = (props) => {

    if (!props.show) {
        return null;
      }
  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="title">
        <h4 className="modalTitle">DELETE DRUG</h4>
      </div>

      <div className="modalBody">
        <div>
          <form>
            <label className='modalLabel'>
              Are you sure you want to delete this drug?
            </label>
          </form>
        </div>
      </div>

      <div className="footer">
        <button
          type="submit"
          className='modalButton'
        >
          Yes
        </button>
        <button
          onClick={props.onClose}
          className='modalButton'
        >
          No
        </button>
      </div>
    </div>
  </div>
  )
}

export default DeleteDrug