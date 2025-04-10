import {ReactNode} from "react";

const Wrapper = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex justify-center px-8 mb-40">
      <div className="max-w-[800px] w-full">{children}</div>
    </div>
  );
};

export default Wrapper;
