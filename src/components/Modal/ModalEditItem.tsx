/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "./Modal";
import { ModalHeader } from "./components/ModalHeader";
import { ModalRow } from "./components/ModalRow";
import { ModalInput } from "./ui/ModalInput";
import { ModalTextarea } from "./components/ModalTextarea";
import { ModalFooter } from "./components/ModalFooter";
import { tasksUpdated } from "../../store/reducers/tasks";
import { categoriesUpdated } from "../../store/reducers/categories";

interface ModalEditItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditItem: React.FC<ModalEditItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [name, setName] = useState(item.name),
    [selected, setSelected] = useState(item.category || ""),
    [description, setDescription] = useState(item.description);

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader
        setActive={setActive}
        title={
          isCategories ? "Редактирование категории" : "Редактирование задачи"
        }
      />
      {isCategories ? (
        <ModalInput name={name} setName={setName} size="large" />
      ) : (
        <ModalRow
          name={name}
          setName={setName}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Сохранить"
        size="large"
        onSubmit={() => {
          if (name) {
            dispatch(
              isCategories
                ? categoriesUpdated({ id: item.id, name, description })
                : tasksUpdated({
                    id: item.id,
                    name,
                    description,
                    category: selected,
                  })
            );
            setActive(false);
          } else {
            alert("Заполните обязательные поля");
          }
        }}
      />
    </Modal>
  );
};
