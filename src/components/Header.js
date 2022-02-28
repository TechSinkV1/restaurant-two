import React from 'react';
const Header = () => {
    return (
        <div>
            <header className="text-slate-200 body-font bg-red-300">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    
                    <span className="ml-3 text-3xl">Restaurant</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center  justify-center text-2xl">
                    <a href="/" className="mr-5 hover:text-gray-900">Breakfast</a>
                    <a href="/" className="mr-5 hover:text-gray-900">Lunch</a>
                    <a href="/" className="mr-5 hover:text-gray-900">Dinner</a>
                    <a href="/" className="mr-5 hover:text-gray-900">Drinks</a>
                    </nav>
                    
                </div>
            </header>
            <hr className='border-red-600'></hr>
        </div>
    );
};

export default Header;