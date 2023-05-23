import { ChangeEvent, memo, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
	initialValue: string;
	placeholder: string;
	error?: string;
	onProfileChange: (value: string) => void;
};

export const TextInputField = memo(
	({ initialValue, placeholder, error, onProfileChange }: Props) => {
		const [value, setValue] = useState(initialValue);

		const inputClass = clsx(styles.input, error && styles.inputWithError);

		useEffect(() => {
			setValue(initialValue);
		}, [initialValue]);

		const onChange = (e: ChangeEvent<HTMLInputElement>) => {
			const value = e.currentTarget.value;

			setValue(value);
			onProfileChange(value);
		};

		return (
			<div className={styles.container}>
				<input
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					className={inputClass}
				/>
				{error && <p className={styles.error}>{error}</p>}
			</div>
		);
	}
);
