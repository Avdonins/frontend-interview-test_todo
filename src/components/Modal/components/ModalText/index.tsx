import "./ModalText.scss";

interface ModalTextProps {
  text: string;
}

export const ModalText: React.FC<ModalTextProps> = ({ text }) => {
  return <p className="modal__text">{text}</p>;
};
