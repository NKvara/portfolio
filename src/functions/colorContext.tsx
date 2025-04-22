/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react";

interface ColorContextProps {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

const Color = ({children}: {children: ReactNode}) => {
  const [color, setColor] = useState("#131421");
  return (
    <ColorContext.Provider
      value={{
        color,
        setColor
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => {
  const context = useContext(ColorContext);

  if (!context) {
    throw new Error(
      "ModalContext context is undefined, please verify you are calling useColorContext()"
    );
  }

  return context;
};

export default Color;
