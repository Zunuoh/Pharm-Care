import React, { useState, useEffect, useCallback } from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ApiModule } from "../api/apiModule";
import {  Edit,  } from "react-feather";
import { Pencil, Trash, Eye } from "heroicons-react";
import EditDrug from "../modals/EditDrug";
import DeleteDrug from "../modals/DeleteDrug";
import ViewDrugDetails from "../modals/viewDrugDetails";

const DrugTable = () => {
  const [drugs, setDrugs] = useState();
  const [showEditDrugModal, setShowEditDrugModal] = useState(false);
  const [showDeleteDrugModal, setShowDeleteDrugModal] = useState(false);
  const [showViewDrugDetailsModal, setShowViewDrugDetailsModal] =
    useState(false);

  const showDrug = () => {
    ApiModule.getDrugs().then((data) => {
      setDrugs(data.products);
    });
  };
  console.log(drugs);

  useEffect(() => {
    showDrug();
    ApiModule.getDrugs();
  }, []);

  const handleToggleShowEditModal = useCallback(
    () => {
      setShowEditDrugModal(!showEditDrugModal)
    },
    [setShowEditDrugModal, showEditDrugModal],
  )
  
  return (
    <div className="tableContainer">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="tableHeader">ID</th>
            <th className="tableHeader">Name</th>
            <th className="tableHeader">Price</th>
            <th className="tableHeader">Actions</th>
          </tr>
        </thead>
        <tbody style={{ color: "#10b981" }}>
          {drugs &&
            drugs.map((drug) => {
              return (
                <tr key={drug.id}>
                  <td>{drug.id}</td>
                  <td>{drug.name}</td>
                  <td>
                  <div>
                    {( drug.prices ? (
                        Math.max(
                          ...drug.prices.map(element => {
                            return new Date(element.date);
                          }),
                        )
                      ) : null)}</div></td>
                  <td>
                    {console.log(
                      // drug.prices.sort((a, b) => a.date - b.date)
                      "max date",
                      drug.prices.find( 
                          (price) => new Date(price.date) ===
                          
                          new Date(
                            Math.max(
                              ...drug.prices.map(element => {
                                return new Date(element.date);
                              }),
                            ),
                          )
                      ),
                     
                    )}
                    {/* listOfValues.sort((a, b) => b.issueDate - a.issueDate); */}
                    <div className="actionContainer">
                    
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="button-tooltip-2">Edit</Tooltip>
                          }
                        >
                          <Pencil
                            className="iconContainer"
                            onClick={handleToggleShowEditModal}
                          />
                        </OverlayTrigger>
                        <EditDrug
                          show={showEditDrugModal}
                          onClose={handleToggleShowEditModal}
                        />
                   

                    
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="button-tooltip-2">Delete</Tooltip>
                          }
                        >
                          <Trash
                            className="iconContainer"
                            onClick={() => setShowDeleteDrugModal(true)}
                          />
                        </OverlayTrigger>
                        <DeleteDrug
                          show={showDeleteDrugModal}
                          onClose={() => setShowDeleteDrugModal(false)}
                        />
                   

                     
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="button-tooltip-2">View</Tooltip>
                          }
                        >
                          <Eye
                            className="iconContainer"
                            onClick={() => setShowViewDrugDetailsModal(true)}
                          />
                        </OverlayTrigger>
                        <ViewDrugDetails
                          show={showViewDrugDetailsModal}
                          onClose={() => setShowViewDrugDetailsModal(false)}
                        />
                     
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default DrugTable;
