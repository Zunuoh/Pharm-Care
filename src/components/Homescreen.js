import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import DrugTable from './DrugTable'
import AddDrug from '../modals/AddDrug'
import DeleteDrug from '../modals/DeleteDrug'

const Homescreen = () => {
  const [showAddDrugModal, setShowAddDrugModal  ] = useState(false);
  const [showEditDrugModal, setShowEditDrugModal  ] = useState(false);
  const [showDeleteDrugModal, setShowDeleteDrugModal  ] = useState(false);
  return (
    <div >
        <div className='logoContainer'>
            pharmXpress
        </div>
        <div >
        <div className='buttonContainer'>
          <Button onClick = {() => setShowDeleteDrugModal(true)}>
            ADD DRUG
          </Button>
          <DeleteDrug show={showDeleteDrugModal} onClose={() => setShowDeleteDrugModal(false)}/>
        </div>

        <div className='mainContainer'>
        <DrugTable/>
        </div>
        </div>
        
      
        
       
    </div>
  )
}

export default Homescreen