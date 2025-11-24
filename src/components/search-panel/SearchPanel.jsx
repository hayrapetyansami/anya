import "./searchPanel.scss";

export default function SearchPanel() {
  return (
    <input
      type="search"
      placeholder="Найти сотрудника"
      className="form-control search-input"
    />
  );
}