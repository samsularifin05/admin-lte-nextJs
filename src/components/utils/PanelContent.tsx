import HeaderContent from "./HeaderContent";

interface Props {
  headerContent?: boolean;
  title?: string;
  menu?: string;
  submenu?: string;
  children?: React.ReactNode;
}
const PanelContent: React.FC<Props> = function (props) {
  return (
    <div className="app-content">
      {props.headerContent && (
        <HeaderContent
          title={props.title}
          menu={props.menu}
          submenu={props.submenu}
        />
      )}
      <div className="container-fluid">{props.children}</div>
    </div>
  );
};

export default PanelContent;
