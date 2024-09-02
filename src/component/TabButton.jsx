export default function TabButton({children, onSelect, isSelcted}){
	console.log('Function App');
	return (
		<li><button className = {isSelcted ? 'active' : ''} 
		onClick={onSelect}>{children}</button></li>
	);
}
