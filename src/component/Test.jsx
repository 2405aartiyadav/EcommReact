import React from 'react';

const Test = () => {
    return (
        <nav className="bg-gray-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="your-logo.png" alt="Logo" className="h-8" />
                    <span className="text-lg font-bold text-gray-800">Ecom-React</span>
                </div>

                {/* Links */}
                <ul className="hidden md:flex space-x-8 text-gray-700">
                    <li><a href="#" className="hover:text-gray-900">Home</a></li>
                    <li><a href="#" className="hover:text-gray-900">Shop</a></li>
                    <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                    <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                </ul>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    <a href="#" className="px-4 py-2 bg-white text-red-500 font-bold rounded-lg hover:bg-gray-100 transition">
                        Log In
                    </a>
                    <a href="#" className="text-gray-700 text-lg"><i className="fas fa-bell"></i></a>
                    <a href="#" className="text-gray-700 text-lg"><i className="fas fa-user"></i></a>
                </div>
            </div>
        </nav>
    );
}

export default Test;
