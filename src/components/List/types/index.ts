export default interface ListItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
}