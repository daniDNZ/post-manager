import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

type Props = {
  children: JSX.Element;
};

function RequireAuth({ children }: Props) {
  const { user } = useUser();

  if (!user.logged) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RequireAuth;
