export const Icon = ({ path, isButton, ...rest }) => (
  <svg
    style={isButton && { cursor: "pointer" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path d={path} />
  </svg>
);

Icon.defaultProps = {
  width: 24,
  height: 24,
  fill: "#636363",
};
