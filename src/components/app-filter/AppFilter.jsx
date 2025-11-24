
import "./appFilter.scss";

export default function AppFiler() {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-light"
      >
        Все Сотрудники
      </button>
      <button
        type="button"
        className="btn btn-outline-light"
      >
        На повышение
      </button>
      <button
        type="button"
        className="btn btn-outline-light"
      >
        З/П больше 1000$
      </button>
    </div>
  )
}