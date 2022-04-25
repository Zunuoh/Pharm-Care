import React, { useState, useEffect, useCallback } from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Pencil, Trash, Eye } from "heroicons-react";
import EditDrug from "../modals/EditDrug";
import DeleteDrug from "../modals/DeleteDrug";
import ViewDrugDetails from "../modals/viewDrugDetails";
import Loader from "./Loader";
import { useSelector, useDispatch } from "react-redux";
import { setActiveDrug } from "../features/drug-reducer";
import _ from "lodash";

const DrugTable = () => {
  const dispatch = useDispatch();
  const [showEditDrugModal, setShowEditDrugModal] = useState(false);
  const [showDeleteDrugModal, setShowDeleteDrugModal] = useState(false);
  const [showViewDrugDetailsModal, setShowViewDrugDetailsModal] =
    useState(false);

  const { value: drugsList, loading } = useSelector((state) => state.drugs);

  const handleToggleShowEditModal = useCallback(
    (drug = null) => {
      dispatch(setActiveDrug(drug));
      setShowEditDrugModal((prev) => !prev);
    },
    [setShowEditDrugModal, showEditDrugModal]
  );

  const handleToggleShowDeleteModal = useCallback(
    (drug = null) => {
      dispatch(setActiveDrug(drug));
      setShowDeleteDrugModal((prev) => !prev);
    },
    [setShowDeleteDrugModal, showDeleteDrugModal]
  );

  const handleToggleShowViewModal = useCallback(
    (drug = null) => {
      dispatch(setActiveDrug(drug));
      setShowViewDrugDetailsModal((prev) => !prev);
    },
    [setShowViewDrugDetailsModal, showViewDrugDetailsModal]
  );

  return (
    <div className="tableContainer">
      {loading ? (
        <div>
          <Loader className="loaderContainer" />
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
              {drugsList?.map((drug, index) => {
                const recentPrice = _.last(_.sortBy(drug?.prices, "date"));
                return (
                  <tr key={drug.id}>
                    <td>{index + 1}</td>
                    <td>{drug.name}</td>
                    <td>GHC {recentPrice?.price}</td>
                    <td>
                      <div className="actionContainer">
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="button-tooltip-2">Edit</Tooltip>
                          }
                        >
                          <Pencil
                            className="iconContainer"
                            onClick={() => handleToggleShowEditModal(drug)}
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
                            onClick={() => handleToggleShowDeleteModal(drug)}
                          />
                        </OverlayTrigger>
                        <DeleteDrug
                          show={showDeleteDrugModal}
                          onClose={handleToggleShowDeleteModal}
                        />

                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="button-tooltip-2">View</Tooltip>
                          }
                        >
                          <Eye
                            className="iconContainer"
                            onClick={() => handleToggleShowViewModal(drug)}
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
