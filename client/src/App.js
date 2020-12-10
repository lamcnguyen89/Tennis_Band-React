import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import CapeDory from './screens/AlbumInfo/CapeDory';
import RitualInRepeat from './screens/AlbumInfo/RitualInRepeat';
import SmallSound from './screens/AlbumInfo/SmallSound';
import Swimmer from './screens/AlbumInfo/Swimmer';
import WeCanDieHappy from './screens/AlbumInfo/WeCanDieHappy';
import YoungAndOld from './screens/AlbumInfo/YoungAndOld';
import YoursConditionally from './screens/AlbumInfo/YoursConditionally';
import AlbumsScreen from './screens/AlbumsScreen';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import StoreScreen from './screens/StoreScreen';
import ThanksScreen from './screens/ThanksScreen';
import ErrorScreen from './screens/ErrorScreen';
import Nav from "./components/nav";
import Footer from "./components/footer";
import Masthead from "./components/masthead";

function App() {
  return (
    <BrowserRouter>
      <Masthead />
      <Nav />
      <div className="pageRoutes">
        <Redirect from="/" exact to="/home" />
        <Route path="/home" component={HomeScreen} />
        <Route path="/music" component={AlbumsScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/store" component={StoreScreen} />
        <Route path="/capedory" component={CapeDory} />
        <Route path="/ritualinrepeat" component={RitualInRepeat} />
        <Route path="/smallsound" component={SmallSound} />
        <Route path="/swimmer" component={Swimmer} />
        <Route path="/wecandiehappy" component={WeCanDieHappy} />
        <Route path="/youngandold" component={YoungAndOld} />
        <Route path="/yoursconditionally" component={YoursConditionally} />
        <Route path="/thanks" component={ThanksScreen} />
        <Route path="/error" component={ErrorScreen} />
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
