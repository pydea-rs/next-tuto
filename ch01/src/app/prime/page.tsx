"use client";

import { signal } from "@preact/signals-react";

const prime = signal(2);

const primeAtIndex = (index: number) => {
    let count: number = 0;
    let last: number = 2;
    for (let i = 2; count < index; i++) {
        const end = (i ** 0.5) | 0;
        let j: number;
        for (j = 2; j <= end && i % j; j++);
        if (j > end) {
            count++;
            last = i;
        }
    }
    return last;
};

setInterval(() => {
    const count = (Math.random() * 10000) | 0;
    prime.value = primeAtIndex(count);
}, [5000]);

export default function PrimeGeneratorPage() {
    return <div className="text-container">
        <h2>Random Prime is: {prime}</h2>
    </div>
}
