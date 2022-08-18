import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { i18next } from './translations';
import { AppRoutes } from './routes';

function App() {
	return (
		<BrowserRouter>
			<I18nextProvider i18n={i18next}>
				<AppRoutes />
			</I18nextProvider>
		</BrowserRouter>
	);
}

export default App;
