import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-pink-300 h-screen">
      <div>
      <label htmlFor="attack">Attack</label>
        <input
          name="attack"
          id="attack"
          type="range"
          min="0"
          max="1"
          value="0.2"
          step="0.1" 
        />
        <label htmlFor="release">Release</label>
        <input
          name="release"
          id="release"
          type="range"
          min="0"
          max="1"
          value="0.5"
          step="0.1" 
        />
      </div>
    </div>
  );
}
