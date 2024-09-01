import cn from 'classnames';
import styles from '../JournalForm/JournalForm.module.css';
import {forwardRef} from 'react';

export const Input = forwardRef(function input({ classNames, isValid=true, appearence, ...props }, ref) {
	return (
		<input {...props} ref={ref} className={cn(classNames, styles['input'], {[styles['invalid']]: !isValid, [styles['input-title']]: appearence === 'title'})}/>
	);
});