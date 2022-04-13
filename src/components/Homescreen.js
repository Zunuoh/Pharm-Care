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
          <Button onClick = {() => setShowAddDrugModal(true)} style={{backgroundColor:"#FF7F50", border:"none"}}>
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