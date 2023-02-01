import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const outOfLog = logOut();
  const { user } = useAuth();

  return (
    <div className="header__inner">
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(outOfLog)}>
        Logout
      </button>
    </div>
  );
};
