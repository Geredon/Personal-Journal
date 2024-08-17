import './leftPanel.css';


const LeftPanel= ({ children }) => {
	return(
		<button className="left-panel">
			{children}
		</button>
	);

};

export default LeftPanel;