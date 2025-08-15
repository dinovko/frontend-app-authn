import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import configureStore from 'redux-mock-store';
import ModernLoginPage from './ModernLoginPage';

const mockStore = configureStore([]);

const defaultProps = {
  backedUpFormData: {
    formFields: { emailOrUsername: '', password: '' },
    errors: { emailOrUsername: '', password: '' },
  },
  loginErrorCode: null,
  loginErrorContext: {},
  loginResult: {},
  shouldBackupState: false,
  showResetPasswordSuccessBanner: false,
  submitState: 'default',
  thirdPartyAuthApiStatus: 'pending',
  institutionLogin: false,
  thirdPartyAuthContext: {
    currentProvider: null,
    errorMessage: null,
    finishAuthUrl: null,
    providers: [],
    secondaryProviders: [],
  },
  backupFormState: jest.fn(),
  dismissPasswordResetBanner: jest.fn(),
  loginRequest: jest.fn(),
  getTPADataFromBackend: jest.fn(),
  handleInstitutionLogin: jest.fn(),
};

const renderWithProviders = (component, store) => {
  const defaultStore = mockStore({
    login: {
      loginFormData: { formFields: {}, errors: {} },
      loginErrorCode: null,
      loginErrorContext: {},
      loginResult: {},
      shouldBackupState: false,
      showResetPasswordSuccessBanner: false,
      submitState: 'default',
    },
    commonComponents: {
      thirdPartyAuthApiStatus: 'pending',
    },
  });

  return render(
    <Provider store={store || defaultStore}>
      <IntlProvider locale="ru" messages={{}}>
        {component}
      </IntlProvider>
    </Provider>
  );
};

describe('ModernLoginPage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<ModernLoginPage {...defaultProps} />);
    expect(screen.getByText('Вход в систему')).toBeInTheDocument();
  });

  it('displays the security message', () => {
    renderWithProviders(<ModernLoginPage {...defaultProps} />);
    expect(screen.getByText('Пожалуйста, подтвердите свою личность для безопасности.')).toBeInTheDocument();
  });

  it('displays the ORLEU logo in header', () => {
    renderWithProviders(<ModernLoginPage {...defaultProps} />);
    expect(screen.getByText('ORLEU')).toBeInTheDocument();
  });

  it('displays language options', () => {
    renderWithProviders(<ModernLoginPage {...defaultProps} />);
    expect(screen.getByText('Каз')).toBeInTheDocument();
    expect(screen.getByText('Рус')).toBeInTheDocument();
    expect(screen.getByText('Eng')).toBeInTheDocument();
  });

  it('displays login form fields', () => {
    renderWithProviders(<ModernLoginPage {...defaultProps} />);
    expect(screen.getByPlaceholderText('Введите логин')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Введите пароль')).toBeInTheDocument();
  });

  it('displays the login button', () => {
    renderWithProviders(<ModernLoginPage {...defaultProps} />);
    expect(screen.getByText('Войти')).toBeInTheDocument();
  });

  it('displays forgot password link', () => {
    renderWithProviders(<ModernLoginPage {...defaultProps} />);
    expect(screen.getByText('Забыли пароль?')).toBeInTheDocument();
  });

  it('displays footer copyright', () => {
    renderWithProviders(<ModernLoginPage {...defaultProps} />);
    expect(screen.getByText(/Все права защищены/)).toBeInTheDocument();
    expect(screen.getByText(/orleu\.edu\.kz/)).toBeInTheDocument();
  });
});
