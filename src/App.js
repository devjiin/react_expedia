import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyleds';


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
			<Nav />
			<Section1 />
			<Section2 />
		</EventWapper>
    </div>
  );
}

export default App;
