import { ModalBtn } from "../../ui/ModalBtn";
import "./ModalFooter.scss";

interface ModalFooterProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  submitBtnText: string;
  size?: string;
  onSubmit: () => void;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  clearState,
  setActive,
  submitBtnText,
  size,
  onSubmit,
}) => {
  return (
    <footer className="modal__footer">
      <ModalBtn type="primary" size={size || ""} onClick={onSubmit}>
        {submitBtnText}
      </ModalBtn>
      <ModalBtn
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}
      >
        Закрыть
      </ModalBtn>
    </footer>
  );
};
