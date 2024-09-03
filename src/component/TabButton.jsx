export default function TabButton({children, isSelcted, ...OnSelect}){
	console.log('Function App');
	return (
		<li><button className = {isSelcted ? 'active' : ''} 
		{...OnSelect}>{children}</button></li>
	);
}
