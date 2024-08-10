// src/components/TagsCard.jsx

import React from 'react';
import Tag from './Tag'; // Importing the new Tag component
import categories from '../data/categories';

const TagsCard = () => {

    return (
        <div className="relative border p-4 shadow w-auto" style={{ backgroundColor: '#FFFACD', borderRadius: '1rem' }}>
            {/* Badge */}
            <div className="absolute top-0 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-1 text-sm font-bold rounded-full border border-gray-300">
                Tags
            </div>
            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 mt-4">
                {categories.map((category) => (
                    <Tag
                        key={category.id}
                        category={category.name}
                        color={category.tagColor}
                    />
                ))}
            </div>
        </div>
    );
};

export default TagsCard;
