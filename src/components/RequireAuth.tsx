import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../hooks/useUser';

type Props = {
  children: JSX.Element;
}

function RequireAuth({ children }: Props) {
  const { user } = useUser();
  const location = useLocation();

  if (!user.logged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
