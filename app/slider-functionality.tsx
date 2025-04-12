

export default function useSlider() {
  const audioCtx = new AudioContext();

  const wave = new PeriodicWave(audioCtx, {
      real: wavetable.real,
      imag: wavetable.imag,
  });


}