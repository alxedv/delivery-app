import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loadUserDataInLocalStorage from '../../../main/useCases/loadUserDataLocalStorage';
import logoffExecute from '../../../main/useCases/logoffExecute';

export default function AdminNavbar() {
  const [admin, setAdmin] = React.useState('');
  const RedirectToPath = useNavigate();

  useEffect(() => {
    setAdmin(loadUserDataInLocalStorage());
  }, []);

  function logout() {
    logoffExecute();
    return RedirectToPath('/login');
  }

  return (
    <div className="div1">
      <div>
        <li
          className="btn-admin-users"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <Link to="/admin/users">Gerenciar Usuários</Link>
        </li>
      </div>
      <div>
        <li className="btn-user">
          <p
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {admin.name}
          </p>
        </li>
        <li className="btn-exit">
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ logout }
          >
            Sair
          </button>
        </li>
      </div>
    </div>
  );
}
