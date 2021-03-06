const mealsDiv = document.getElementById('foods');
const mealDiv = document.getElementById('mealDetails');


        document.getElementById('search').addEventListener('click', function () {
            const meals = document.getElementById('food').value;
            if(meals === ''){
                alert('food name is not valid');
            }
            else{
                getFood(meals);
            }
            
            document.getElementById('food').value = '';
        })


        function getFood(meals) {

                const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`;
                mealDiv.innerHTML = null;
                mealsDiv.innerHTML = null;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    displayMeals(data)
                })
                .catch(error => {
                    alert('food name is not valid');
                    document.getElementById('food').value = '';
                })
        }


        const displayMeals = data => {

            data.meals.forEach(meal => {
                const mealDiv = document.createElement('div');
                mealDiv.className = 'meal';
                const mealInfo = `
                <div onclick = "displayMealDetail('${meal.strMeal}')">
                <img src ="${meal.strMealThumb}">
                <h3 class = "meal-name"> ${meal.strMeal} </h3>
                </div>  
             `;
                mealDiv.innerHTML = mealInfo;
                mealsDiv.appendChild(mealDiv);
            })
            
        };

        
        const displayMealDetail = name => {

            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
            fetch(url)
                .then(res => res.json())
                .then(data => renderMealInfo(data))
        }
        const renderMealInfo = meal => {
            mealDiv.innerHTML = `
            <div class = "displayDetails">
            <img src ="${meal.meals[0].strMealThumb}">
            <h3 class = "meal-name"> ${meal.meals[0].strMeal} </h3>
            <p class = "meals">Ingredients</p>
                    <ul class = "ulStyle">                    
                        <li>${meal.meals[0].strIngredient1}</li>
                        <li>${meal.meals[0].strIngredient2}</li>
                        <li>${meal.meals[0].strIngredient3}</li>
                        <li>${meal.meals[0].strIngredient4}</li>
                        <li>${meal.meals[0].strIngredient5}</li>
                        <li>${meal.meals[0].strIngredient6}</li>
                        <li>${meal.meals[0].strIngredient7}</li>
                        <li>${meal.meals[0].strIngredient8}</li>
                        <li>${meal.meals[0].strIngredient9}</li>
                        <li>${meal.meals[0].strIngredient10}</li>
                    </ul>
                    </div>
    `;
    
        }
        