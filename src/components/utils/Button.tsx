import { useLoadingStore } from "@/store/utils";

interface props {
  loading?: boolean;
  type: any;
  color: string;
  block?: boolean;
  textLoading?: string;
  onClick?: any;
  title?: string;
  icon?: string;
  disabled?: boolean;
}
const Button: React.FC<props> = (props) => {
  const { title, icon, onClick, textLoading, disabled, type, color, block } =
    props;

  const { loading } = useLoadingStore();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading.button}
      className={`btn btn-${color} ${block === undefined ? "" : "btn-block"}`}
    >
      {loading.button ? (
        loading ? (
          <>
            <i className="fas fa-spinner fa-spin" /> &nbsp; {textLoading}
          </>
        ) : (
          title || <i className={`fas ${icon}`} />
        )
      ) : (
        title || <i className={`fas ${icon}`} />
      )}
    </button>
  );
};

export default Button;
