import './App.css';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import LeftPanel from './components/Layouts/LeftPanel/leftPanel.jsx';
import Body from './components/Layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import {JournalForm} from './components/JournalForm/JournalForm.jsx';
import { v4 as uuidv4 } from 'uuid';
import {useLocalStorage} from './hooks/useLocalStorage.hook.js';


const mapItems = (items) => {
	if (!items) return [];

	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
};

function App() {
	const [items, setItems] = useLocalStorage('data');

	const addItem = (item) => {
		setItems([...mapItems(items), {
			post: item.post,
			title: item.title,
			date: new Date(item.date),
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
					{mapItems(items).sort(handleSortItems).map((item) => (
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
