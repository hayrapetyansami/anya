import { Component } from "react";
import "./employeesListItem.scss";

export default class EmployeesListItem extends Component {
  render() {
    const {
      name, salary, onDelete,
      onToggleIncrease, onToggleRise,
      increase, rise } = this.props;
    return (
      <li className={`list-group-item d-flex justify-content-between ${increase ? "increase" : ""} ${rise ? "liked" : ""}`}>
        <span
          onClick={onToggleRise}
          className="list-group-item-label"
        >
          {name}
        </span>
        <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            // onClick={() => this.onTrigger("increase")}
            onClick={onToggleIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}