"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Background = dynamic(() => import("./Background"), {
    ssr: false,
});

export default function ClientBackground() {
    return (
        <Suspense fallback={<div className="fixed inset-0 bg-black -z-10" />}>
            <Background />
        </Suspense>
    );
}
