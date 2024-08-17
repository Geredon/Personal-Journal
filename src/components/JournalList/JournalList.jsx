import './JournalList.css';

const JournalList= ({children }) => {

	return(
		<button className="journal-list">
			{children}
		</button>
	);

};

export default JournalList;