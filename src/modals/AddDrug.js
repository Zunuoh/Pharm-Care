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
        <h4 className="modal-title">ADD TASK</h4>
      </div>

      <div className="modalBody">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <form className="todo-form">
            <label
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#3A2E39",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Enter task:
            </label>
            <input
              type="text"
              // placeholder="Enter task"
              className="todo-taskName"
              name="drugName"
            />

            <label
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#3A2E39",
                fontFamily: "Montserrat, sans-serif",
                marginTop: 30,
              }}
            >
              Enter description:
            </label>
            <textarea
              style={{ height: 70 }}
              className="todo-taskName"
            //   name="description"
            //   value={description}
            //   onChange={descriptionNameChange}
            />
          </form>
        </div>
      </div>

      <div className="footer">
        <button
          className="todo-button"
          type="submit"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Add
        </button>
        <button
          onClick={props.onClose}
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Close
        </button>
      </div>
    </div>
  </div>
  )
}

export default AddDrug
