import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './styles.module.scss';

type Props = {
	placeholder: string;
	type?: string;
	register: UseFormRegisterReturn;
};

export const TextInputField = memo(({ placeholder, type, register }: Props) => {
	return (
		<input placeholder={placeholder} className={styles.input} type={type} {...register} />
	);
});
