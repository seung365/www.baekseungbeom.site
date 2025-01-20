import { useEffect } from "react";
import ReactDOM from "react-dom";
import ProjectDetail from "./ProjectDetail";
import { S } from "./styles";

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
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen, handleClose]);

  const modalContent = (
    <S.ModalOverlay onClick={handleClose} className={isClosing ? "closing" : ""}>
      <S.ModalContent
        onClick={(e) => {
          e.preventDefault(); // 이벤트 기본 동작 방지
          e.stopPropagation(); // 이벤트 버블링 중지
        }}
        className={isClosing ? "closing" : ""}
      >
        <S.CloseButton onClick={handleClose}>&times;</S.CloseButton>
        <ProjectDetail project={project} index={0} />
      </S.ModalContent>
    </S.ModalOverlay>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById("modal-root") || document.body);
};

export default Modal;
