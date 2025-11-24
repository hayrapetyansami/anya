import AppInfo from "../app-info/AppInfo";
import AppFiler from "../app-filter/AppFilter";
import SearchPanel from "../search-panel/SearchPanel";
import EmployeesList from "../employees-list/EmployeesList";
import EmployeesAddForm from "../employees-add-form/EmployeesAddForm";

import { v4 as uuidv4 } from 'uuid';

import "./app.scss";

function App() {
  const data = [
    {
      id: uuidv4(),
      name: "John Smith",
      salary: 3000,
      increase: false
    },
    {
      id: uuidv4(),
      name: "Alex Shepard",
      salary: 2500,
      increase: false
    },
    {
      id: uuidv4(),
      name: "Joe Johnson",
      salary: 1420,
      increase: false
    },
  ];

  return (
    <div className="app">
      <AppInfo/>
      
      <div className="search-panel">
        <SearchPanel/>
        <AppFiler />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
