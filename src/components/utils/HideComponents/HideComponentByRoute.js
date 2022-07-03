import { useLocation } from "react-router";

export default function HideComponentByRoute({ children }) {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return children;
}
