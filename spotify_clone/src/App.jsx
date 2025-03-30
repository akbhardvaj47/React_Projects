import { useContext } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Player from './Components/Player';
import Display from './Components/Display';
import { PlayerContext } from './context/PlayerContext';
import Footer from './Components/Footer';

function App() {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%]  flex">
        {/* Hide Sidebar on small devices */}
        <Sidebar className="lg:block hidden" /> {/* Sidebar will be hidden on small screens (default) */}
        <Display />
      </div>
      <Player />
      <audio preload="auto" ref={audioRef} src={track.file}></audio>
    <Footer />
    </div>
  );
}

export default App;
