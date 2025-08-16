import React from "react";

const SearchBar: React.FC = () => {
    return (
        <div className="relative w-full lg:w-80">
            <input
                type="text"
                placeholder="Search.."
                className="w-full px-4 py-3 bg-neutral-300 rounded-lg text-primary-gray placeholder-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue"
            />
            <img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/QxDvVjb2bm.svg"
                alt="Search"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
            />
        </div>
    );
};

export default SearchBar;
