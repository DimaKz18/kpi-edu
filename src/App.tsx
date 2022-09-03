import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { i18next } from './translations';
import { AppRoutes } from './routes';
import { Provider } from 'react-redux';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from '@mui/material';
import { store } from './store';
import theme from './utils/theme';
import './firebase';

function App() {
	return (
		<BrowserRouter>
			<I18nextProvider i18n={i18next}>
				<Provider store={store}>
					<AuthProvider>
						<ThemeProvider theme={theme}>
							<AppRoutes />
						</ThemeProvider>
					</AuthProvider>
				</Provider>
			</I18nextProvider>
		</BrowserRouter>
	);
}

export default App;
