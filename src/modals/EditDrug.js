import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash";
import { getDrug, updateDrug } from '../features/drug-reducer';


const EditDrug = ({id, ...props}) => {
  const drug = useSelector(state => getDrug(state, id))

  const [editName, setEditName] = useState("")
  const [editPrice, setEditPrice] = useState(0)
  const [editDate, setEditDate] = useState("")

  const dispatch = useDispatch();

  const onSubmit = () =>{
    dispatch(
      updateDrug({
        id: drug.id,
        name: editName || props.selectedDrug.name,
        price: editPrice || _.last(_.sortBy(props.selectedDrug?.prices, "date")).price,
        changed: editPrice === _.last(_.sortBy(props.selectedDrug?.prices, "date")).price
      })
    )
    props.onClose?.();
  }
  
  
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
            <label className='modalLabel'>
              Name of Drug:
            </label>
            <input
              type="text"
              placeholder='Eg: Paracetamol'
              className="modalActionName"
              name="drugName"
              value={editName || drug?.name}
              onChange={(e )=> setEditName?.(e.target.value)}
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
            value={editPrice || _.last(_.sortBy(drug?.price, "date"))?.price}
            onChange={(e) => setEditPrice?.(e.target.value)}
            />

            <label className="modalLabel">Date:</label>
              <input
                type="date"
                id="birthday"
                name="drugDate"
                className="calendar"
                defaultValue={drug?.date}
                value={editDate}
                onChange={(e) => setEditDate?.(e.target.value)}
              />
          </form>
        </div>
      </div>

      <div className="footer">
        <button
          type="submit"
          className='acceptModalButton'
          onClick={onSubmit}
        >
          Edit
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

export default EditDrug