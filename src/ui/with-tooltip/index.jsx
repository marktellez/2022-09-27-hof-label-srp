import { useState } from "react";

export default function withTooltip(Component) {
  return function WrappedComponent({ tip, isOpen = false, ...rest }) {
    const [_isOpen, setIsOpen] = useState(isOpen);
    return (
      <div className="relative">
        {_isOpen ? (
          <div className="absolute -bottom-40  bg-gray-800 text-white p-4 w-1/4">
            <div className="flex">
              <div className="flex-grow">{tip}</div>
              <div className="text-white" onClick={() => setIsOpen(false)}>
                x
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <Component {...rest} />
      </div>
    );
  };
}
