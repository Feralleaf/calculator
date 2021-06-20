import "./Button.css";

function Button ({symbol, color, handleClick}) {
	return (
		<div 
		onClick={() => handleClick(symbol)}
		className="btn-wrapper" 
		style={{backgroundColor: color}}
		>
			{symbol}
		</div>
	)
}

export default Button