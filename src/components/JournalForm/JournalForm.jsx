import './JournalForm.css';
import Button from '../Button/Button.jsx';


export const JournalForm = ({onSubmit}) => {

	const addJournalItem = (e) => {
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		e.preventDefault();
		onSubmit(formProps);
	};

	return (
		<form className="journal-form" onSubmit={addJournalItem}>
			<input type="text" name="title"/>
			<input type="date" name="date"/>
			<input type="text" name="tag"/>
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<Button title="Сохранить" onclick={() => console.log('нажали')}/>
		</form>

	);
};