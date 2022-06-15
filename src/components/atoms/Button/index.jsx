export const Button = ({ children, onClick, ...rest }) => (
  <button className="btn" onClick={onClick} {...rest}>
    {children}
  </button>
);
