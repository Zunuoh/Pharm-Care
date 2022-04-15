import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import DrugTable from './DrugTable'
import AddDrug from '../modals/AddDrug'
import DeleteDrug from '../modals/DeleteDrug'

const Homescreen = () => {
  const [showAddDrugModal, setShowAddDrugModal  ] = useState(false);


 
  return (
    <div >
        <div className='logoContainer'>
            pharmCare
        </div>
        <div >
        <div className='buttonContainer'>
          <button onClick = {() => setShowAddDrugModal(true)} className='addButton'>
            Add Drug
          </button>
          <AddDrug show={showAddDrugModal} onClose={() => setShowAddDrugModal(false)}/>
        </div>

        <div className='mainContainer'>
        <DrugTable/>
        </div>
        </div>
        
      
        
       
    </div>
  )
}

export default Homescreen