import React, { useState, useEffect } from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ApiModule } from "../api/apiModule";
import { Eye, Edit, Trash } from "react-feather";
import EditDrug from "../modals/EditDrug";
import DeleteDrug from "../modals/DeleteDrug";
import ViewDrugDetails from "../modals/viewDrugDetails";

const DrugTable = () => {
  const [drugs, setDrugs] = useState("");
  const [showEditDrugModal, setShowEditDrugModal] = useState(false);
  const [showDeleteDrugModal, setShowDeleteDrugModal] = useState(false);
  const [showViewDrugDetailsModal, setShowViewDrugDetailsModal] =
    useState(false);

  const showDrug = () => {
    ApiModule.getDrugs().then((data) => {
      setDrugs(data.products);
    });
  };

  useEffect(() => {
    showDrug();
    ApiModule.getDrugs();
  }, []);
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
        <tbody style={{ color: "#FF7F50" }}>
          {drugs &&
            drugs.map((drug) => {
              return (
                <tr>
                  <td>{drug.id}</td>
                  <td>{drug.name}</td>
                  <td>Otto</td>
                  <td>
                    <div className="actionContainer">
                      <div>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="button-tooltip-2">Edit</Tooltip>
                          }
                        >
                          <Edit
                            className="iconContainer"
                            onClick={() => setShowEditDrugModal(true)}
                          />
                        </OverlayTrigger>
                        <EditDrug
                          show={showEditDrugModal}
                          onClose={() => setShowEditDrugModal(false)}
                        />
                      </div>

                      <div>
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
                      </div>

                      <div>
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
