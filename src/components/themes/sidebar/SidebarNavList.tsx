import { memo, useEffect, useRef, useState } from "react";
import { Menu } from "./menu";
import Link from "next/link";

interface Props {
  data?: Menu;
  submenu?: any;
  clicked?: any;
  active?: any;
  handleExpand?: any;
  expand?: any;
  navheader?: any;
}

const SidebarNavList: React.FC<Props> = (props) => {
  const icon = props.data?.icon && <i className={props.data.icon} />;
  const titlesub = props.data?.title && (
    <p>
      {props.data.title} <i className="nav-arrow fas fa-angle-right" />
    </p>
  );

  const title = props.data?.title && <p>{props.data.title}</p>;

  const [isMenuExtended, setIsMenuExtended] = useState(false);

  const mainMenuRef = useRef<HTMLUListElement>(null);
  const submenuRef = useRef<HTMLUListElement>(null);

  const handleMainMenuAction = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMenuExtended((prev) => !prev);
  };

  useEffect(() => {
    const menuElement =
      props.submenu === "active" ? submenuRef.current : mainMenuRef.current;

    if (!menuElement) return;

    if (isMenuExtended) {
      menuElement.classList.add("show");
      menuElement.style.display = "block";
      menuElement.style.maxHeight = menuElement.scrollHeight + "px";
      menuElement.style.opacity = "1";
      menuElement.style.overflow = "auto";
      setTimeout(() => {
        menuElement.style.maxHeight = "none";
      }, 300);
    } else {
      menuElement.style.maxHeight = menuElement.scrollHeight + "px";
      menuElement.style.overflow = "hidden";

      requestAnimationFrame(() => {
        menuElement.style.maxHeight = "0px";
        menuElement.style.opacity = "0";
      });

      setTimeout(() => {
        menuElement.classList.remove("show");
        menuElement.style.display = "none";
      }, 300);
    }
  }, [isMenuExtended, props.submenu]);

  return (
    <>
      {props.data?.navheader && (
        <li className="nav-header">{props.data.title}</li>
      )}

      <li className={`nav-item${isMenuExtended ? " menu-open" : ""}`}>
        {props.data?.children ? (
          <Link
            href={props.data?.path}
            className="nav-link"
            onClick={handleMainMenuAction}
            style={{ cursor: "pointer" }}
          >
            {icon} {titlesub}
          </Link>
        ) : props.data?.navheader !== true ? (
          <Link
            href={props.data?.path || ""}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            {props.submenu === "active" ? (
              <i className="far fa-circle nav-icon" />
            ) : null}
            {icon} {title}
          </Link>
        ) : null}

        {props.data?.children && (
          <ul
            ref={props.submenu === "active" ? submenuRef : mainMenuRef}
            className="nav nav-treeview"
          >
            {props.data.children.map((submenu: any, i: number) => (
              <SidebarNavList data={submenu} key={i} submenu="active" />
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default memo(SidebarNavList);
