import close from "../../../../icons/close.svg";
import './ModalHeader.scss';

interface ModalHeaderProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  clearState,
  title,
  setActive,
}) => {
  return (
    <header className="modal__header">
      <h4 className="modal__header-title">{title}</h4>
      <button
        className="modal__header-btn"
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}
      >
        <img src={close} alt="close" />
      </button>
    </header>
  );
};
