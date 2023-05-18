import { ChangeEvent, memo } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { SearchIcon } from 'common/icons/common';
import styles from './styles.module.scss';

type Props = {
	value: string;
	containerClassName?: string;
	inputClassName?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = memo(
	({ value, containerClassName, inputClassName, onChange }: Props) => {
		const { t } = useTranslation();

		const containerClass = clsx(styles.container, containerClassName);
		const inputClass = clsx(styles.input, inputClassName);

		return (
			<div className={containerClass}>
				<SearchIcon className={styles.icon} />
				<input
					value={value}
					className={inputClass}
					placeholder={t('search_input_placeholder')}
					onChange={onChange}
				/>
			</div>
		);
	}
);
