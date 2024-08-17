import './App.css';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import LeftPanel from './components/Layouts/LeftPanel/leftPanel.jsx';
import Body from './components/Layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import {JournalForm} from './components/JournalForm/JournalForm.jsx';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_DATA = [
	{
		title:'Подготовка обновления курсов',
		date: new Date(),
		text: 'Горные походы открывают удивительные природыне ландшафты'

	},
	{
		title:'Поход в горы',
		date: new Date(),
		text: 'Горные походы открывают удивительные природыне ландшафты'

	},
	{
		title:'Развлечься',
		date: new Date(),
		text: 'Горные походы открывают удивительные природыне ландшафты'

	}
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = (newItem) => {
		setItems((oldItems) => [...oldItems, {
			text: newItem.text,
			title: newItem.title,
			date: new Date(newItem.date),
			id: uuidv4()
		}]);
	};

	const handleSortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	return (
		<div className="app">
			<LeftPanel>
				<Header/>
				<JournalList>
					<JournalAddButton/>
					{items?.length && items.sort(handleSortItems).map((item) => (
						<CardButton key={item.id}>
							<JournalItem
								title={item.title}
								text={item.text}
								date={item.date}
							/>
						</CardButton>
					)
					)}
					{!items?.length && <p>Нет воспоминаний</p>}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div>
	);
}

export default App;
