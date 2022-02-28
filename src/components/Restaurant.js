import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Foods from './Foods';

const Restaurant = () => {
    const [foods, setFoods] = useState([])
    console.log(foods)
    const [cart, setCart] = useState([])
    const [displayFoods, setDisplayFoods] = useState([])
    useEffect(() => {
        fetch('https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=100')
        .then(res=> res.json())
        .then(data => {
            setFoods(data.results);
            setDisplayFoods(data.results);
        })
    }, [])
    const handleFoodClick=(food)=>{
        console.log('Food clicked');
        const newcart = [...cart, food];
        setCart(newcart)
    }
    const handleSearch=(event)=>{
        const searchFor = event.target.value;
        const matchedTitle = foods.filter(food=> food.title.toLowerCase().includes(searchFor.toLowerCase()));
        setDisplayFoods(matchedTitle)
    }
    return (
        <div>
            <div className="text-center inline-flex items-center bg-gray-100 border-0 py-2  px-3 focus:outline-none rounded text-base mt-4 md:mt-0 text-black w-full">Search
                    <input 
                    className='w-full ml-3 outline-none bg-gray-100' 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder='type what you want'
                    onChange={handleSearch}
                    />
            </div>
            <div className="flex justify-between mx-60">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            displayFoods.map(food=> <Foods 
                                food={food}
                                key={food.id}
                                handleFoodClick={handleFoodClick}
                            />)
                        }
                    </div>
                </div>
            </section>
                <div>
                    <Cart
                    cart={cart}
                    />
                </div>
            </div>
        </div>
    );
};

export default Restaurant;