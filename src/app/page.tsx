"use client"
import { useContext } from "react";
import { CountContext } from "./context";
import Link from "next/link";

export default function Home() {
  const obj = useContext(CountContext)
  console.log(obj)
  return (
    <main className="flex flex-col items-center pt-10">
      <h1 className="text-center text-[32px] font-bold">Context API</h1>
      <p><Link href="/test">Test</Link></p>
      <h1>{obj.count}</h1>
      <div className="flex gap-10">
        <button onClick={()=>{obj.setCount(++obj.count)}}>Increment</button>
        <button onClick={()=>{obj.setCount(--obj.count)}}>Decrement</button>
      </div>
    </main>
  );
}
