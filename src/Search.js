import React, { useState, useEffect } from "react";
import Card from "./card";
import DropdownSelect from "./Dropdownselect.js";

const Search = () => {
    const [products, setProducts] = useState([]);
    const [type, setType] = useState('smartphones'); // Initialize with a default value
    const [api, setApi] = useState(`https://dummyjson.com/products/category/${type}`);
    const options = [
        { value: 'motorcycle', label: 'motorcycle' },
        { value: 'laptops', label: 'laptops' },
        { value: 'fragrances', label: 'fragrances' },
        { value: 'skincare', label: 'skincare' },
        { value: 'furniture', label: 'furniture' },
    ];

    const getData = () => {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        setApi(`https://dummyjson.com/products/category/${type}`);
        getData();
    }, [type]); // Update the products when the type changes, not the products themselves

    const handleOptionChange = (selectedOption) => {
        setType(selectedOption);
    };

    return (
        <div className="Search">
            <div>
                <DropdownSelect options={options} onChange={handleOptionChange} />
            </div>
            <div className='cards'>
                <div className="flex flex-wrap justify-center items-center h-500 min-screen ">
                    {products.length > 0 ? (
                        products.map(product => (
                            <div key={product.id}>
                                <Card {...product} />
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
