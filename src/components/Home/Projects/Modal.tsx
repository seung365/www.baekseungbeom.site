"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";
import ProjectDetail from "./ProjectDetail";
import * as styles from "./styles.css";

interface ModalProps {
  isModalOpen: boolean;
  handleClose: () => void;
  isClosing: boolean;
  project: {
    title: string;
    period: string;
    githubUrl: string;
    team: string;
    purpose: string;
    mainTasks: string[];
    tech: string;
  };
}

const Modal = ({ isModalOpen, handleClose, isClosing, project }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, handleClose]);

  const modalContent = (
    <div className={`${styles.modalOverlay} ${isClosing ? "closing" : ""}`} onClick={handleClose}>
      <div
        className={`${styles.modalContent} ${isClosing ? "closing" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={styles.closeButton} onClick={handleClose} type="button" aria-label="모달 닫기">
          &times;
        </button>
        <ProjectDetail project={project} index={0} />
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById("modal-root") || document.body);
};

export default Modal;
