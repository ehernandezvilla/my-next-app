'use client';

import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const menu = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
                <div className="text-white text-lg">MyApp</div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        &#9776;
                    </button>
                </div>
                <ul className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                    {menu.map((item, index) => (
                        <li key={index} className="text-white">
                            <a href={item.path} className="block px-2 py-1 hover:bg-gray-700 rounded">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}