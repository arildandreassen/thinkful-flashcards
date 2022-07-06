import { Link } from "react-router-dom";

function Breadcrumbs({ breadcrumbs }) {
  const baseclass = "breadcrumb-item";

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className={baseclass}>
          <Link to="/">Home</Link>
        </li>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb, index) => {
            const { title, path } = breadcrumb;
            const classname = path ? baseclass : baseclass.concat(" active");
            return (
              <li className={classname} key={index}>
                {path ? <Link to={path}>{title}</Link> : title}
              </li>
            );
          })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
