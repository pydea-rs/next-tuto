"use client";
import { signal } from "@preact/signals-react";

const dice = signal(0);

setInterval(() => {
    dice.value = ((Math.random() * 6) | 0) + 1;
}, [1000]);

export default function ThrowDicesPage() {
    return (
        <div className="text-container">
            <h2>Dice is: {dice}</h2>
        </div>
    );
}
