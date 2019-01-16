/*
 * Tangible Style Guide
 * Copyright 2018 Freeman Co.
 *
 * # Dialogs
 *
 * Required:
 * ` Import  | import Modal from "react-responsive-modal";
 * ` States  | open: false
 *
 * Props to be passed:
 * ` open            | true or false
 * ` showCloseIcon   | true or false
 *
 */

<Modal
  open={this.state.open}
  onClose={() => this.setState({ open: !this.state.open })}
  showCloseIcon={false}
  center
  classNames={{ overlay: "modal-overlay", modal: "modal-dialog" }}
>
  <div
    className="modal-content dark"
    role="dialog"
    aria-labelledby="dialogTitle"
    aria-describedby="dialogDesc"
    aria-live="polite"
  >
    <div className="modal-header" id="dialogTitle">
      <h4>Sample Heading</h4>
    </div>
    <div className="modal-body" id="dialogDesc">
      Sample Text
    </div>
    <div className="modal-footer">
      <button
        className="btn btn-secondary dark"
        onClick={() => {
          this.setState({ open: false });
        }}
      >
        CANCEL
      </button>
      <button className="btn btn-primary dark">DELETE</button>
    </div>
  </div>
</Modal>;
