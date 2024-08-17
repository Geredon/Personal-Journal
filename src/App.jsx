import './App.css';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import LeftPanel from './components/Layouts/LeftPanel/leftPanel.jsx';
import Body from './components/Layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import {JournalForm} from './components/JournalForm/JournalForm.jsx';

function App() {
	const data = [
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

	return (
		<div className="app">
			<LeftPanel>
				<Header/>
				<JournalList>
					<JournalAddButton/>
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[2].title}
							text={data[2].text}
							date={data[2].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm/>
			</Body>
		</div>
	);
}

export default App;
