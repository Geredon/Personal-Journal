import styles from'./JournalForm.module.css';
import Button from '../Button/Button.jsx';
import {useEffect, useReducer, useRef} from 'react';
import cn from 'classnames';
import {formReducer, INITIAL_STATE} from './JoutnalForm.state.jsx';
import {Input} from '../Input/Input.jsx';


export const JournalForm = ({ onSubmit }) => {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { values, isValid, isFormReadyToSubmit } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();

	const focusError = (isValid) => {
		switch (true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.post || !isValid.title) {
			focusError(isValid);
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
				<Input type="text" value={values.title} ref={titleRef} isValid={isValid.title} onChange={handleOnchange} name="title" appearence="title"/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src="/calendar.svg" alt="Иконка календаря"/>
					<span>Дата</span>
				</label>
				<Input type="date" name="date" id="date" ref={dateRef} onChange={handleOnchange} isValid={isValid.date} value={values.date}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src="/folder.svg" alt="Иконка папки"/>
					<span>Метки</span>
				</label>
				<Input type="text" name="tag" id="tag" onChange={handleOnchange} value={values.tag}/>
			</div>
			<textarea name="post" id="" ref={postRef} onChange={handleOnchange} cols="30" rows="10" value={values.post} className={cn(styles['input'],
				{[styles['invalid']]: !isValid.post})}></textarea>
			<Button title="Сохранить"/>
		</form>

	);
};