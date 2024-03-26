// Dynamically add student ID and name
const myInfo = document.getElementById('myInfo');
if (myInfo) {
    myInfo.textContent = "My name is Neel Patel, and my Georgian student ID is 200556051.";
}

// Event listener for order button
const orderBtn = document.getElementById('orderBtn');
if (orderBtn) {
    orderBtn.addEventListener('click', function() {
        // Get values from the form inputs
        const size = document.getElementById('size').value;
        const crust = document.querySelector('input[name="crust"]:checked');
        const cheese = document.getElementById('cheese').value;
        const meatToppings = Array.from(document.querySelectorAll('input[name="meat_topping"]:checked')).map(checkbox => checkbox.value);
        const veggieToppings = Array.from(document.querySelectorAll('input[name="veggie_topping"]:checked')).map(checkbox => checkbox.value);
        const specialtyToppings = Array.from(document.querySelectorAll('input[name="specialty_topping"]:checked')).map(checkbox => checkbox.value);
        const appetizers = Array.from(document.querySelectorAll('input[name="appetizer"]:checked')).map(checkbox => checkbox.value);
        const pasta = Array.from(document.querySelectorAll('input[name="pasta"]:checked')).map(checkbox => checkbox.value);
        const desserts = Array.from(document.querySelectorAll('input[name="dessert"]:checked')).map(checkbox => checkbox.value);
        const drinks = Array.from(document.querySelectorAll('input[name="drink"]:checked')).map(checkbox => checkbox.value);

        // Check if all required elements are found
        if (size && crust && cheese) {
            // Create PizzaMaker object
            const pizza = new PizzaMaker(size, crust.value, cheese, meatToppings, veggieToppings, specialtyToppings, appetizers, pasta, desserts, drinks);

            // Output description
            const pizzaDescription = document.getElementById('pizzaDescription');
            if (pizzaDescription) {
                pizzaDescription.innerHTML = `
                    <p>Size: ${pizza.size}</p>
                    <p>Crust: ${pizza.crust}</p>
                    <p>Cheese: ${pizza.cheese}</p>
                    <p>Meat Toppings: ${pizza.meatToppings.join(', ')}</p>
                    <p>Veggie Toppings: ${pizza.veggieToppings.join(', ')}</p>
                    <p>Specialty Toppings: ${pizza.specialtyToppings.join(', ')}</p>
                    <p>Appetizers: ${pizza.appetizers.join(', ')}</p>
                    <p>Pasta: ${pizza.pasta.join(', ')}</p>
                    <p>Desserts: ${pizza.desserts.join(', ')}</p>
                    <p>Drinks: ${pizza.drinks.join(', ')}</p>
                `;
            }
        } else {
            console.error("Required form elements not found.");
        }
    });
} else {
    console.error("Order button not found.");
}

// PizzaMaker class
class PizzaMaker {
    constructor(size, crust, cheese, meatToppings, veggieToppings, specialtyToppings, appetizers, pasta, desserts, drinks) {
        this.size = size;
        this.crust = crust;
        this.cheese = cheese;
        this.meatToppings = meatToppings;
        this.veggieToppings = veggieToppings;
        this.specialtyToppings = specialtyToppings;
        this.appetizers = appetizers;
        this.pasta = pasta;
        this.desserts = desserts;
        this.drinks = drinks;
    }
}
