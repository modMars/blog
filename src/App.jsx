import { useEffect } from 'react';
import './App.css';
import BlogCard from './Components/BlogCard';

function App() {
	useEffect(() => {
		fetch('http://localhost:3000/api')
			.then(posts => posts.json())
			.then(posts => console.log(posts));
	}, []);

	return (
		<>
			<BlogCard></BlogCard>
		</>
	);
}

export default App;
