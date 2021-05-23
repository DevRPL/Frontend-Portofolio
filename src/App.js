import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './component/Footer.jsx';
import Navigation from './component/Navigation.jsx';
import Portfolio from './component/Portfolio.jsx';
import NotFoundPage from './error/NotFoundPage.js';
import Header from './component/Header.jsx';
import NetworkDetector from './error/NetworkDetector.jsx';
import './App.css';
import Skill from './component/Skill.jsx';
import useDarkMode from './component/use-dark-mode.jsx';
import Toggle from './component/Toggle.jsx';
import "./App.scss";
import Softkill from './component/Softkill.jsx';
import About from './component/About.jsx';
import Content from './component/Content.jsx';
import YouTube from './component/YouTube.jsx';
import Feedback from './component/Feedback.jsx';

function App() {
	const [darkMode, setDarkMode] = useDarkMode();
  return (
	<Fragment>
		<BrowserRouter>
			<Fragment>
				<Switch>
					<Route path="/" exact >
						<Navigation>
							<Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
						</Navigation>
						<Header title="Welcome To My Portfolio" />
						<Softkill />
						<div style={{ padding: '25px' }}></div>
						<YouTube />
						<div style={{ padding: '25px' }}></div>
						<Footer />
					</Route>
					<Route path="/about">
						<Navigation>
							<Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
						</Navigation>
						<About />
						<div style={{ padding: '25px' }}></div>
						<Footer />
					</Route>
					<Route path="/skill">
						<Navigation>
							<Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
						</Navigation>
						{/* <Skill /> */}
						<Skill />
						<div style={{ padding: '25px' }}></div>
						<Footer />
					</Route>
					<Route path="/portfolio">
						<Navigation>
							<Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
						</Navigation>
						<Portfolio />
						<div style={{ padding: '25px' }}></div>
						<Footer />
					</Route>
					<Route path="/content">
						<Navigation>
							<Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
						</Navigation>
						<Content />
						<div style={{ padding: '25px' }}></div>
						<Footer />
					</Route>
					<Route path="/feedback">
						<Navigation>
							<Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
						</Navigation>
						<Feedback />
						<div style={{ padding: '25px' }}></div>
						<Footer />
					</Route>
					<Route>
						<Navigation>
							<Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
						</Navigation>
						<NotFoundPage content="404 Page NotFound" />
						<div style={{ padding: '25px' }}></div>
						<Footer />
					</Route>
					<Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
				</Switch>
			</Fragment>
		</BrowserRouter>
</Fragment>
  );
}

export default NetworkDetector(App);
