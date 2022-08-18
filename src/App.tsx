import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { i18next } from './translations';
import { AppRoutes } from './routes';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';

function App() {
	return (
		<BrowserRouter>
			<I18nextProvider i18n={i18next}>
				<ThemeProvider theme={theme}>
					<AppRoutes />
				</ThemeProvider>
			</I18nextProvider>
		</BrowserRouter>
	);
}

export default App;
