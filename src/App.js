import './App.css'
import NewsTabs from './components/NewsTabs';
import News from './components/News';
import Information from './components/Information';
import SearchBar from './components/SearchBar';
import Ads from './components/Ads';
import Weather from './components/Weather';

function App() {
	return (
		<div className='app'>
			<div className='header'>
				<NewsTabs>
					<News />
					<News />
					<News />
				</NewsTabs>
				<Information>
					<div>Img</div>
				</Information>
			</div>
			<div className='body'>
				<SearchBar />
			</div>
			<div className='footer'>
				<Ads />
				<div>
					<Weather />
					<Information />
					<Information />
					<Information />
					<Information />
				</div>
			</div>
		</div>
	);
}

export default App;
