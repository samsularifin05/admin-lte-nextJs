import Link from "next/link";

interface props {
  title?: string;
  menu?: string;
  submenu?: string;
}
const HeaderContent: React.FC<props> = (props) => (
  <section className="app-content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>{props?.title}</h1>
        </div>
        {props?.menu && (
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-end">
              <li className="breadcrumb-item">
                <div>{props?.menu}</div>
              </li>
              <li className="breadcrumb-item active">{props?.submenu}</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default HeaderContent;
