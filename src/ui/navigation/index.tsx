import {ReactNode} from "react";
import {usePhoneMediaQuery} from "@/functions/usePhone";
import NavigationMobile from "@/ui/navigation/navigationMobile";
import NavigationDesktop from "@/ui/navigation/navigationDesktop";

const Navigation = ({children}: {children: ReactNode}) => {
  const phone = usePhoneMediaQuery();

  if (phone) {
    return <NavigationMobile>{children}</NavigationMobile>;
  }

  return <NavigationDesktop>{children}</NavigationDesktop>;
};

export default Navigation;
