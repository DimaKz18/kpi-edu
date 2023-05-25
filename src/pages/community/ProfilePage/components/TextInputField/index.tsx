import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
	placeholder: string;
	type?: string;
	error?: string;
	register: UseFormRegisterReturn;
};

export const TextInputField = memo(({ placeholder, type, error, register }: Props) => {
	const inputClass = clsx(styles.input, error && styles.inputWithError);

	return (
		<div className={styles.container}>
			<input placeholder={placeholder} className={inputClass} type={type} {...register} />
			{error && <p className={styles.error}>{error}</p>}
		</div>
	);
});
