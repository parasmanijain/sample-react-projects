import { useState } from 'react';

const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

export const SearchBar = () => {
    const [query, setQuery] = useState('');

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};