import { Component } from "react";

import AppInfo from "../app-info/AppInfo";
import AppFiler from "../app-filter/AppFilter";
import SearchPanel from "../search-panel/SearchPanel";
import EmployeesList from "../employees-list/EmployeesList";
import EmployeesAddForm from "../employees-add-form/EmployeesAddForm";

import { v4 as uuidv4 } from 'uuid';

import "./app.scss";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: uuidv4(),
          name: "John Smith",
          salary: 3000,
          increase: false,
          rise: false
        },
        {
          id: uuidv4(),
          name: "Alex Shepard",
          salary: 2500,
          increase: false,
          rise: false
        },
        {
          id: uuidv4(),
          name: "Joe Johnson",
          salary: 1420,
          increase: false,
          rise: false
        },
      ]
    }
  }

  onDeleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex(elem => elem.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newState = [...before, ...after];

      return { data: data.filter(item => item.id !== id) }
    });
  }

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.map(item => {
          if (item.id === id) {
            return { ...item, increase: !item.increase };
          } else {
            return item;
          }
        })
      }
    });
  }

  onToggleRise = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.map(item => {
          if (item.id === id) {
            return { ...item, rise: !item.rise };
          } else {
            return item;
          }
        })
      }
    });
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFiler />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.onDeleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm />
      </div>
    );
  }
}