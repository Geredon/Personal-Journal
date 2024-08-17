import './Button.css';

const Button = ({title, onclick}) => {

	return (
		<button className="button accent" onClick={onclick}>
			{title}
		</button>
	);
};

export default Button;