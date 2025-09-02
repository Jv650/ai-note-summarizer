import React, {useState} from "react";
import urls from "../components/foodUrls.json";
import '../css/Switch.css';


const SwitchCase = () => {
const [isFoodUrl, setIsFoodUrl] = useState<string>("");
const [selectedFood, setSelectedFood] = useState<string>("");

const handleFoodSelection = (food: string) => {
    setSelectedFood(food);
    
switch(food) {
    case "pasta":
    setIsFoodUrl(urls.pasta.pastaUrl);
        break;
    case "burger":
    setIsFoodUrl(urls.burger.burgerUrl);
    break;
    case 'dessert':
    setIsFoodUrl(urls.dessert.dessertUrl);
        break;
    case 'pizza':
    setIsFoodUrl(urls.pizza.pizzaUrl);
       break;
    default:
        setIsFoodUrl("");
}
}
return (
    <div>
        <div className='button-styling'>
        <button id='button-option' onClick={() => handleFoodSelection('pasta')}>Pasta</button>
        <button id='button-option' onClick={() => handleFoodSelection('dessert')}>Dessert</button>
        <button id='button-option' onClick={() => handleFoodSelection('pizza')}>Pizza</button>
        <button id='button-option' onClick={() => handleFoodSelection('burger')}>Burger</button>
        </div>
        {isFoodUrl && (
            <div>
                {/* <h3 style={{color: 'white'}}>{selectedFood.charAt(0).toUpperCase() + selectedFood.slice(1)}</h3> */}
                <img src={isFoodUrl} alt={selectedFood} style={{width: '300px', height: '200px', marginTop:'50px'}}/>
            </div>
        )}
    </div>
);
}
export default SwitchCase;