
import ShowcaseSection from './pages/ShowcaseSection';
import HomeSection from './pages/HomeSection.jsx';
import AboutSection from './pages/AboutSection.jsx';
import NavbarComponent from './components/NavbarComponent';
import { useEffect, useState } from 'react';
//router

import { Switch, Route} from 'react-router-dom';


function App() {
  const [navHide, setNavhide] = useState(true);

  useEffect(() => {
    const scrollListener = () =>{
      if(window.scrollY > 25){
        setNavhide(true)
      } else{
        setNavhide(false)
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  })

  return (
    <div className="App">
      <NavbarComponent navHidden={navHide} />
      <Switch>  
        <Route path="/" exact>
          <HomeSection />
        </Route>
        <Route path="/showcase">
          <ShowcaseSection />
        </Route>
        <Route path="/about">
          <AboutSection/>
        </Route>
      </Switch>
      
      
      
      
    </div>
  );
}

export default App;
