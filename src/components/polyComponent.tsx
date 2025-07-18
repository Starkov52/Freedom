import React, { ElementType, ReactNode } from "react";
type PolyComponentType<E extends ElementType> = {
     as: E;
     children?: ReactNode;
     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
     onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
     value: string;
} & React.ComponentProps<E>;
function PolyComponent<E extends ElementType = "p">({
     as,
     children,
     onChange,
     value,
     onBlur,
     ...rest
}: PolyComponentType<E>) {
     const ReturnComponent: any = as || "div";
     if (as !== "input") {
          return (
               <ReturnComponent style={{ borderBottom: "0px" }} {...rest}>
                    {children}
               </ReturnComponent>
          );
     } else if (as === "input") {
          return <ReturnComponent value={value} onBlur={onBlur} onChange={onChange} {...rest} />;
     }
}
export default PolyComponent;
