import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black py-8 border-t border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none -z-10"></div>
            <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Lifnin Danish J. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
                Built with React, Tailwind & Love.
            </p>
        </footer>
    );
}
