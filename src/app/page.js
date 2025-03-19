"use client";

import Badge from "@/components/badge";
import Button from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home page netlify
      <Button>Click me!</Button>
      <Badge text="COmpany"/>
      <Input
        value={inputValue}
        placeholder="Enter value"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </main>
  );
}
