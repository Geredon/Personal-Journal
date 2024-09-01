import styles from'./JournalForm.module.css';
import Button from '../Button/Button.jsx';
import {useEffect, useReducer} from 'react';
import cn from 'classnames';
import {formReducer, INITIAL_STATE} from './JoutnalForm.state.jsx';


export const JournalForm = ({ onSubmit }) => {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { values, isValid, isFormReadyToSubmit } = formState;

	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.post || !isValid.title) {
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
			return () => {
				clearTimeout(timerId);
			};
		}
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit]);

	const addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	const handleOnchange = (e) => {
		dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value} });
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input type="text" value={values.title} onChange={handleOnchange} name="title" className={cn(styles['input-title'], {
					[styles['invalid']]: !isValid.title
				})}/>
			</div>
			<input type="date" name="date" onChange={handleOnchange} value={values.date} className={cn(styles['input'], {
				[styles['invalid']]: !isValid.date
			})}/>
			<input type="text" name="tag" onChange={handleOnchange} value={values.tag}/>
			<textarea name="post" id="" onChange={handleOnchange} cols="30" rows="10" value={values.post} className={cn(styles['input'], {
				[styles['invalid']]: !isValid.post
			})}></textarea>
			<Button title="Сохранить" />
		</form>

	);
};