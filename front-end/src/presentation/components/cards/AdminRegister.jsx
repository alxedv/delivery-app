import React from 'react';
import validateEmail from '../../../main/useCases/validateEmail';
import validatePassword from '../../../main/useCases/validatePassword';

const initialState = {
  name: '',
  email: '',
  password: '',
  role: 'seller',
};

export default function AdminRegister() {
  const [registerState, setRegisterState] = React.useState(initialState);

  const stateUpdate = (e) => setRegisterState({
    ...registerState,
    [e.name]: e.value,
  });

  const FULL_NAME = 12;

  const isValidForm = () => validatePassword(registerState.password)
    && validateEmail(registerState.email) && registerState.name.length >= FULL_NAME;

  return (
    <div>
      <h1>Cadastrar novo usário</h1>
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            placeholder="Nome e sobrenome"
            name="name"
            data-testid="admin_manage__input-name"
            value={ registerState.name }
            onChange={ ({ target }) => stateUpdate(target) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
            value={ registerState.email }
            onChange={ ({ target }) => stateUpdate(target) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            placeholder="********"
            data-testid="admin_manage__input-password"
            value={ registerState.password }
            onChange={ ({ target }) => stateUpdate(target) }
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select
            name="role"
            data-testid="admin_manage__select-role"
            value={ registerState.role }
            onChange={ ({ target }) => stateUpdate(target) }
          >
            <option value="seller">Vendendor</option>
            <option value="customer">Cliente</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ !isValidForm() }
        >
          CADASTRAR
        </button>
      </div>
    </div>
  );
}
