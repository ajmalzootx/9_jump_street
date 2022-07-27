import './App.scss';
import NavBar from './components/NavBar';
import Blog from './components/Blog';
import HeroSection from './components/HeroSection';
import ApiData from './components/ApiData.jsx';

export default function App() {
  return (
    <>
      <NavBar/>
      <Blog/>
      <HeroSection/>
      <ApiData/>
    </>

  );
}
