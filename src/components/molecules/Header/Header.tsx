import { headerPaths } from "@static";
import clsx from "clsx";
import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = (): ReactElement => {
  // hooks
  const { pathname } = useLocation();

  return (
    <div className="px-32 py-5 bg-sky-500">
      <ul className="flex items-center space-x-8 text-white">
        {headerPaths.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={clsx(
                pathname.includes(item.path) && "bg-sky-400 p-3 rounded-lg"
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
