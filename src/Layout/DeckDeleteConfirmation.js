import React from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { deleteDeck } from "../utils/api";
import "./DeckDeleteConfirmation.css";

const DeckDeleteConFirmation = ({ deleteName, deleteId }) => {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();

  const handleDelete = () => {
    deleteDeck(deleteId);
    url === "/" ? history.go(location.pathname) : history.push("/");
  };

  return (
    <div
      className="modal fade"
      id="deleteConfirmation"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete: {deleteName}?
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Do you want to delete this deck? <br />
              You will not be able to recover it
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={handleDelete}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckDeleteConFirmation;
