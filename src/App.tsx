import { ChangeEvent } from 'react';

const App = () => {
	const convertFileToBase64 = (file: File) => {
		return new Promise((resolve, reject) => {
			if (!file) return;
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const onMediaChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		const file = e.target.files[0];
		const base64 = await convertFileToBase64(file);
		alert(base64);
	};

	return (
		<div className='App'>
			Test
			<input
				type='file'
				accept='image/x-png,image/jpeg,image/gif'
				onChange={onMediaChange}
			/>
		</div>
	);
};

export default App;
