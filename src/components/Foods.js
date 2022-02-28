import React from 'react';

const Foods = (props) => {
    const{title, image, nutrition} = props.food
    // console.log(props.food)
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href="/" className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="rounded object-cover w-full h-full block" src={image}/>
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Nutrients: {nutrition.nutrients[0].name}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                <p className="mt-1 text-xl">$ {nutrition.nutrients[0].amount.toFixed()}</p>
                <button className='bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600'
                    onClick={()=>props.handleFoodClick(props.food)}
                >Want to Eat</button>
            </div>                
        </div>
    );
};

export default Foods;