import { useRef, createContext, useState, useEffect } from "react";
import { songsData } from "../assets/assets"; // Assuming you have a list of songs

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 },
    });

    const updateTime = () => {
        const current = audioRef.current.currentTime;
        const total = audioRef.current.duration;

        const currentMinutes = Math.floor(current / 60);
        const currentSeconds = Math.floor(current % 60);

        const totalMinutes = Math.floor(total / 60);
        const totalSeconds = Math.floor(total % 60);

        setTime({
            currentTime: { minute: currentMinutes, second: currentSeconds },
            totalTime: { minute: totalMinutes, second: totalSeconds },
        });

        const seekWidth = (current / total) * 100;
        if (seekBar.current) {
            seekBar.current.style.width = `${seekWidth}%`;
        }
    };

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setPlayStatus(true);
            audioRef.current.ontimeupdate = updateTime;
        }
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setPlayStatus(false);
            audioRef.current.ontimeupdate = null; // Stop updating time when paused
        }
    };

    const playWithId = async (id) => {
        const newTrack = songsData[id];
        setTrack(newTrack);
        if (audioRef.current) {
            await audioRef.current.load(); // Load new track before playing
            await audioRef.current.play();
            setPlayStatus(true);
        }
    };

    const previous = async () => {
        if (track.id > 0) {
            const newTrack = songsData[track.id - 1];
            setTrack(newTrack); // Update the track state first
            if (audioRef.current) {
                await audioRef.current.load(); // Load the new track
                await audioRef.current.play(); // Play the new track
                setPlayStatus(true); // Set the play status to true
            }
        }
    };

    const next = async () => {
        if (track.id < songsData.length - 1) {
            const newTrack = songsData[track.id + 1];
            setTrack(newTrack); // Update the track state first
            if (audioRef.current) {
                await audioRef.current.load(); // Load the new track
                await audioRef.current.play(); // Play the new track
                setPlayStatus(true); // Set the play status to true
            }
        }
    };

    const seekSong = (e) => {
        if (audioRef.current && seekBg.current) {
            const offsetX = e.nativeEvent.offsetX;
            const width = seekBg.current.offsetWidth;
            const seekPercentage = offsetX / width;
            const seekTime = seekPercentage * audioRef.current.duration;

            audioRef.current.currentTime = seekTime;
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.ontimeupdate = updateTime;
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.ontimeupdate = null; // Cleanup on unmount
            }
        };
    }, [audioRef.current]); // Ensure audioRef.current is properly initialized

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong,
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export { PlayerContext, PlayerContextProvider };
