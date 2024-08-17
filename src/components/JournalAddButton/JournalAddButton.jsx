import CardButton from '../CardButton/CardButton.jsx';
import './JournalAddButton.css';


const JournalAddButton= () => {
	return(
		<CardButton className="journal-add">
			<img src="/plus.svg" alt="plus"/>
			Новое воспоминание
		</CardButton>
	);

};

export default JournalAddButton;