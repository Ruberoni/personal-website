import React, { ReactElement, ComponentPropsWithRef } from "react";

export interface VerticalStackProps extends ComponentPropsWithRef<"div"> {
  Separator?: ReactElement;
}

const VerticalStack = ({
  children,
  Separator,
  ...divProps
}: VerticalStackProps) => {
  const ChildrenWithSeparator = React.Children.map(children, (child, index) =>
    index !== 0 ? [Separator, child] : child
  );

  return <div {...divProps}>{ChildrenWithSeparator}</div>;
};

VerticalStack({});

export default VerticalStack;
