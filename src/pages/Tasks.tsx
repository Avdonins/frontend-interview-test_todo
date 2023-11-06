/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { ListItem } from "../components/List";
import { selectAllTasks } from "../store/reducers/tasks";

export const Tasks: React.FC = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <ListItem key={task.id} item={task} />
      ))}
    </ul>
  );
};