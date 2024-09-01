import './App.css';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import LeftPanel from './components/Layouts/LeftPanel/leftPanel.jsx';
import Body from './components/Layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import {JournalForm} from './components/JournalForm/JournalForm.jsx';
import {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map((item) => ({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);

	useEffect(() => {
		if (items.length) {
			localStorage.setItem('data', JSON.stringify(items));
		}

	}, [items]);

	const addItem = (newItem) => {
		setItems((oldItems) => [...oldItems, {
			post: newItem.post,
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
