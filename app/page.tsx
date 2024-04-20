import React from "react";
import {Checkbox} from "@nextui-org/checkbox";
import {DateRangePicker} from "@nextui-org/date-picker";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <h1>hello world</h1>
      <Checkbox defaultSelected>Option</Checkbox>
      <DateRangePicker 
      label="Stay duration" 
      className="max-w-xs" 
    />
    </main>
  )
}
