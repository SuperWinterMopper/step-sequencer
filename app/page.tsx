'use client';

import { useState } from "react"
import MySlider from "@/slider";

export default function Page() {  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center w-4/5 h-[50vh]">
        <MySlider />
      </div>
    </div>
  )
}
