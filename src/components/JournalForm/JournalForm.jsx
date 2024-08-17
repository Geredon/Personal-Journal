import {useState} from 'react';
import './JournalForm.css';
import Button from '../Button/Button.jsx';


export const JournalForm = () => {
	const [inputData, setInputData] = useState('');

	const handleInput = (e) => {
		setInputData(e.target.value);
	};

	const addJournalItem = (e) => {
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		e.preventDefault();
		console.log(formProps);
	};

	return (
		<form className="journal-form" onSubmit={addJournalItem}>
			<input type="text" name="title"/>
			<input type="date" name="date"/>
			<input type="text" name="tag" value={inputData} onChange={handleInput}/>
			<textarea name="post" id="" cols="30" rows="10"></textarea>
			<Button title="Сохранить" onclick={() => console.log('нажали')}/>
		</form>

	);
};