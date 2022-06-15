import React from "react";
import Icon from "../../../libs/icons";
import "./style.scss";

export const BadgeIcon = (props) => {
  const { isCount, count, path, width, height, fill, ...rest } = props;
  const iconProps = { path, width, height, fill };
  return (
    <div style={{ cursor: "pointer" }} {...rest}>
      <div style={{ position: "relative" }}>
        <Icon {...iconProps} />
        {isCount && <span className="count">{count}</span>}
      </div>
    </div>
  );
};
