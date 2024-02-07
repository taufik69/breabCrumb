import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const pathnameB = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";
  console.log(breadcrumbPath);

  return (
    <div>
      <Link to={"/"}>Home</Link>
      {pathnameB.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnameB.length - 1;
        return isLast ? (
          <span key={breadcrumbPath}>{`/${name}`}</span>
        ) : (
          <Link>
            <span key={breadcrumbPath}>{`/${breadcrumbPath}`}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
