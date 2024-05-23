interface Props {
  children: string;
  onClick: () => void;
}

const alertButton = ({ children, onClick }: Props) => {
  return (
    <button type="button" className="btn btn-dark" onClick={onClick}>
      {children}
    </button>
  );
};

export default alertButton;
