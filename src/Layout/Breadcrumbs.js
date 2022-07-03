import { Link } from "react-router-dom";

function Breadcrumbs({ active }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {active}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
