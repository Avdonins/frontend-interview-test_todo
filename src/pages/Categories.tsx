/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { ListItem } from "../components/List";
import { selectAllCategories } from "../store/reducers/categories";

export const Categories = () => {
  const categories = useSelector(selectAllCategories);

  return (
    <ul>
      {categories.map((category) => (
        <ListItem key={category.id} item={category} />
      ))}
    </ul>
  );
};
