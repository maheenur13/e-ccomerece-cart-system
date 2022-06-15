import { useEffect, useState } from "react";
import { useClickOutside } from "../../../libs/hooks";
import { Button } from "../Button";

export const Dropdown = ({
  buttonLabel,
  children,
  alignRight,
  isOpen,
  ...rest
}) => {
  const [isActive, setActive] = useState(false);
  const { wrapperRef } = useClickOutside(() => setActive(false));
  const listProps = { alignRight };

  useEffect(() => {
    setActive(isOpen);
  }, [isOpen]);

  return (
    <div className="dropdown_wrapper" ref={wrapperRef}>
      <Button
        onClick={(e) => {
          if (rest?.onClick) {
            rest.onClick(e);
          }
          setActive(!isActive);
        }}
      >
        {buttonLabel}
      </Button>
      {isActive && (
        <div className="dropdown_list" {...listProps}>
          {children}
        </div>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  alignRight: false,
};

export * from "./DropdownItem";
