import React from "react";
import { Modal } from "react-bootstrap";

const StatusModal = ({
  modalIsOpen,
  handleClose,
  handleStatusChange,
  buttonStyles,
}) => (
  <Modal show={modalIsOpen} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>출결 상태 선택</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{ ...buttonStyles, backgroundColor: "#a6c8ff" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "darkblue")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#a6c8ff")
          }
          onClick={() => handleStatusChange("Present")}
        >
          출석
        </div>
        <div
          style={{ ...buttonStyles, backgroundColor: "#bfbfbf" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "darkgray")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#bfbfbf")
          }
          onClick={() => handleStatusChange("Absent")}
        >
          결석
        </div>
        <div
          style={{ ...buttonStyles, backgroundColor: "#ffd966" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "darkorange")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#ffd966")
          }
          onClick={() => handleStatusChange("Late")}
        >
          지각
        </div>
        <div
          style={{ ...buttonStyles, backgroundColor: "#a4df9e" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "darkgreen")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#a4df9e")
          }
          onClick={() => handleStatusChange("EarlyLeave")}
        >
          조퇴
        </div>
      </div>
    </Modal.Body>
  </Modal>
);

export default StatusModal;
