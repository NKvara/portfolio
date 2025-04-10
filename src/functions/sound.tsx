import {useEffect, useRef, useState} from "react";
import * as Tone from "tone";

const useSoundVisualizer = () => {
  const [circleDimensions, setCircleDimensions] = useState({size: 0});
  const analyserRef = useRef<Tone.Analyser | null>(null);
  const playerRef = useRef<Tone.Player | null>(null);
  const [path, setPath] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!path) return;

    setIsReady(false);

    const analyser = new Tone.Analyser("waveform", 256);
    const player = new Tone.Player(path, () => {
      player.volume.value = -10;
      player.connect(analyser);
      setIsReady(true);
      player.start();
    }).toDestination();

    analyserRef.current = analyser;
    playerRef.current = player;

    const calculateDimensions = () => {
      if (analyserRef.current) {
        const data = analyserRef.current.getValue();
        const frequencyData = Array.isArray(data) ? data.flat() : data;

        if (!(frequencyData instanceof Float32Array)) {
          console.error("Expected frequency data to be a Float32Array.");
          return;
        }

        const averageFrequency =
          frequencyData.reduce(
            (sum: number, value: number) => sum + Math.abs(value),
            0
          ) / frequencyData.length;

        const newRadius = (averageFrequency / 255) * 50;
        setCircleDimensions({size: newRadius * 2});
      }

      requestAnimationFrame(calculateDimensions);
    };

    calculateDimensions();

    return () => {
      player.stop();
    };
  }, [path]);

  return {
    size: circleDimensions.size,
    path,
    setPath,
    handlePlaySound: () => {
      if (isReady && playerRef.current) {
        playerRef.current.start();
      } else {
        console.warn("Sound not ready yet!");
      }
    },
    handleStopSound: () => {
      if (playerRef.current) {
        playerRef.current.stop();
      }
    }
  };
};

export default useSoundVisualizer;
