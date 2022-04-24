import React, {useCallback, useState, useEffect} from 'react'
import DrugTable from './DrugTable'
import AddDrug from '../modals/AddDrug'


const Homescreen = () => {
  const [showAddDrugModal, setShowAddDrugModal  ] = useState(false);
  
  const handleToggleShowAddModal = useCallback(
    () => {
      setShowAddDrugModal(!showAddDrugModal)
    },
    [setShowAddDrugModal,showAddDrugModal],
  )
  
  // useEffect(() => {
  //   const formData = window.localStorage.getItem('pharmcare')
  //   console.log("FORMMMM", formData)
  //   setShowAddDrugModal(JSON.parse(formData));
  // })
  // useEffect(() => {
  //   window.localStorage.setItem('pharmcare', JSON.stringify(showAddDrugModal));
  // })
 
  return (
    <div >
        <div className='logoContainer'>
            pharmCare
        </div>
        <div >
        <div className='buttonContainer'>
          <button onClick = {handleToggleShowAddModal} className='addButton'>
            Add Drug
          </button>
          <AddDrug show={showAddDrugModal} onClose={handleToggleShowAddModal}/>
        </div>

        <div className='mainContainer'>
        <DrugTable/>
        </div>
        </div>
        
      
        
       
    </div>
  )
}

export default Homescreen