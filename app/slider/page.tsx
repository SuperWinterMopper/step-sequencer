'use client';

import { useState } from "react"
import MySlider from "./slider";

export default function Page() {
  const [attack, setAttack] = useState(.2);
  
  return (
    <div>
      <p>{attack}</p>
      <MySlider />
    </div>
  )
}
