import './style.scss';

export const Button = ({ children, ...rest }) => (
  <button className="btn" {...rest}>
    {children}
  </button>
);
