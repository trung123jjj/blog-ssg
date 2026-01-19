"use client";

import { useState } from "react";

export default function SettingsToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        marginTop: 20,
        padding: 16,
        background: dark ? "#333" : "#f5f5f5",
        color: dark ? "#fff" : "#000",
      }}
    >
      <h3>Settings</h3>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
