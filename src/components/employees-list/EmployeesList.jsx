import EmployeesListItem from "../employees-list-item/EmployeesListItem";

import "./employeesList.scss";

export default function EmployeesList({ data, onDelete }) {
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
      />
    )
  });
  return (
    <ul className="app-list list-group">
      {
        // data.map(item => <EmployeesListItem name={item.name} salary={item.salary} />)
        elements
      }
    </ul>
  );
}