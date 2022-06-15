export const DropdownItem = ({ type, href, children, className, ...rest }) => {
  const dropdownItemProps = {
    className: `dropdown_Item ${className}`,
    ...rest,
  };

  if (type === "button") {
    return <button {...dropdownItemProps}>{children}</button>;
  }

  return (
    <link href={href} passHref>
      <a {...dropdownItemProps}>{children}</a>
    </link>
  );
};

DropdownItem.defaultProps = {
  type: "a",
};
