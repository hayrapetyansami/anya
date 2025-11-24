import EmployeesListItem from "../employees-list-item/EmployeesListItem";

import "./employeesList.scss";

export default function EmployeesList({data}) {
  const elements = data.map(item => <EmployeesListItem {...item} key={item.id} />);
  return (
    <ul className="app-list list-group">
      {
        // data.map(item => <EmployeesListItem name={item.name} salary={item.salary} />)
        elements
      }
    </ul>
  );
}