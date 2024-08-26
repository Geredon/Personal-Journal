import styles from'./JournalForm.module.css';
import Button from '../Button/Button.jsx';
import {useState} from 'react';
import cn from 'classnames';


export const JournalForm = ({onSubmit}) => {
	const [formValidState, setFormValidState] = useState({
		title: true,
		post: true,
		date: true
	});

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;

		setFormValidState({
			title: !!formProps.title?.trim().length,
			post: !!formProps.post?.trim().length,
			date: !!formProps.date
		});

		if (!formProps.title?.trim().length) {
			isFormValid = false;
		}
		if (!formProps.post?.trim().length) {
			isFormValid = false;
		}
		if (!formProps.date) {
			isFormValid = false;
		}
		if(isFormValid) {
			return;
		}
		onSubmit(formProps);
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input type="text" name="title" className={cn(styles['input-title'], {
					[styles['invalid']]: !formValidState.title
				})}/>
			</div>
			<input type="date" name="date" className={cn(styles['input'], {
				[styles['invalid']]: !formValidState.date
			})}/>
			<input type="text" name="tag" />
			<textarea name="post" id="" cols="30" rows="10" className={cn(styles['input'], {
				[styles['invalid']]: !formValidState.post
			})}></textarea>
			<Button title="Сохранить" />
		</form>

	);
};