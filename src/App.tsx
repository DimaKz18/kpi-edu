import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { i18next } from './translations';
import { AppRoutes } from './routes';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';
import theme from './utils/theme';

function App() {
	return (
		<BrowserRouter>
			<I18nextProvider i18n={i18next}>
				<Provider store={store}>
					<ThemeProvider theme={theme}>
						<AppRoutes />
					</ThemeProvider>
				</Provider>
			</I18nextProvider>
		</BrowserRouter>
	);
}

export default App;
