import Header from './component/Header';
import Content from './component/Content';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyleds';
import './App.css';


const EventWapper = styled.div`
	overflow:hidden;
	min-width:980px;
`

function App() {
  return (
	<div className="App">
		<GlobalStyles />
		<EventWapper>
			<Header />
			<Content />
		</EventWapper>
	</div>
	);
}

export default App;
