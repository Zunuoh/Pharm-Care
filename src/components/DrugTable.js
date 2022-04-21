import React, { useState, useEffect, useCallback } from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ApiModule } from "../api/apiModule";
import { Pencil, Trash, Eye } from "heroicons-react";
import EditDrug from "../modals/EditDrug";
import DeleteDrug from "../modals/DeleteDrug";
import ViewDrugDetails from "../modals/viewDrugDetails";
import Loader from "./Loader";
import {useSelector, useDispatch} from "react-redux";
import _ from "lodash";


const DrugTable = () => {
  // const [drugs, setDrugs] = useState();
  const [showEditDrugModal, setShowEditDrugModal] = useState(false);
  const [showDeleteDrugModal, setShowDeleteDrugModal] = useState(false);
  const [showViewDrugDetailsModal, setShowViewDrugDetailsModal] = useState(false);
  const [selectedDrug, setSelectedDrug] = useState();


  const {value:drugsList, loading} = useSelector((state) => state.drugs)
 console.log("check", drugsList)

  const handleToggleShowEditModal = useCallback((drug=null) => {
    setSelectedDrug(drug)
    setShowEditDrugModal(!showEditDrugModal);
  }, [setShowEditDrugModal, setSelectedDrug, showEditDrugModal]);

  const handleToggleShowDeleteModal = useCallback(() => {
    setShowDeleteDrugModal(!showDeleteDrugModal);
  }, [setShowDeleteDrugModal, showDeleteDrugModal]);

  const handleToggleShowViewModal = useCallback(() => {
    setShowViewDrugDetailsModal(!showViewDrugDetailsModal);
  }, [setShowViewDrugDetailsModal, showViewDrugDetailsModal,]);


  return (
    <div className="tableContainer">
      { loading ? (
        <div className="loaderContainer">
           <Loader/>
        </div>  
      ) : (
        <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="tableHeader">ID</th>
            <th className="tableHeader">Name</th>
            <th className="tableHeader">Price</th>
            <th className="tableHeader">Actions</th>
          </tr>
        </thead>
        <tbody>
          { drugsList?.map((drug, index) => {
              const recentPrice = _.last(_.sortBy(drug?.prices, "date"))
              return (
                <tr key={drug.id}>
                  <td>{index + 1}</td>
                  <td>{drug.name}</td>
                  <td>GHC {recentPrice?.price}</td>
                  <td>
                    <div className="actionContainer">
                      <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="button-tooltip-2">Edit</Tooltip>}
                      >
                        <Pencil
                          className="iconContainer"
                          onClick={() => handleToggleShowEditModal(drug)}
                        />
                      </OverlayTrigger>
                      <EditDrug
                        show={showEditDrugModal}
                        onClose={handleToggleShowEditModal}
                        id={selectedDrug?.id}
                      />

                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="button-tooltip-2">Delete</Tooltip>
                        }
                      >
                        <Trash
                          className="iconContainer"
                          onClick={handleToggleShowDeleteModal}
                        />
                      </OverlayTrigger>
                      <DeleteDrug
                        show={showDeleteDrugModal}
                        onClose={handleToggleShowDeleteModal}
                      />

                      <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="button-tooltip-2">View</Tooltip>}
                      >
                        <Eye
                          className="iconContainer"
                          onClick={handleToggleShowViewModal}
                        />
                      </OverlayTrigger>
                      <ViewDrugDetails
                        show={showViewDrugDetailsModal}
                        onClose={handleToggleShowViewModal}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      </div>
      )}
      
      
    </div>
  );
};

export default DrugTable;
