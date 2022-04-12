import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import DrugTable from './DrugTable'
import AddDrug from '../modals/AddDrug'

const Homescreen = () => {
  const [showAddDrugModal, setShowAddDrugModal  ] = useState(false);
  return (
    <div >
        <div className='logoContainer'>
            pharmXpress
        </div>
        <div >
        <div className='buttonContainer'>
          <Button onClick = {() => setShowAddDrugModal(true)}>
            ADD DRUG
          </Button>
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