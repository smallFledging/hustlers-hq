// import funcs

import { getMealById } from "./api.js";

const mainRecipeContainer = document.querySelector(".main__recipe");
const closeBtn = document.querySelector(".meal-recipe__btn");

async function loadRecipe() {
  const params = new URLSearchParams(window.location.search);
//   console.log("params", params);
  const id = params.get("id");
//   console.log("id", id);

  if (!id) return;

  const mealRecipe = await getMealById(id);
//   console.log("mealRecipe", mealRecipe);
      // --- add content to recipe container
    // --- DOM elements for top block
    const recipeImg = document.querySelector(".meal-recipe__img");
    const recipeTitle = document.querySelector(".meal-recipe__title");
    const recipeArea = document.querySelector(".meal-recipe__area");
    const recipeCategory = document.querySelector(".meal-recipe__category");

    // --- insert content
    recipeImg.setAttribute("src", mealRecipe.strMealThumb);
    recipeTitle.innerText = mealRecipe.strMeal;
    recipeArea.innerText = mealRecipe.strArea;
    recipeCategory.innerText = mealRecipe.strCategory;

    // --- DOM elements for middle block
    const recipeIngredientsList = document.querySelector(
      ".meal-recipe__ingredients-list"
    );
    // const recipeIngredientsLiElements = recipeIngredientsList.children;
    const recipeMeasureList = document.querySelector(
      ".meal-recipe__measures-list"
    );
    // const recipeMeasureLiElements = recipeMeasureList.children;

    // --- DOM elements for bottom block
    const recipeInstruction = document.querySelector(".meal-recipe__info-text");
    recipeInstruction.innerText = mealRecipe.strInstructions;

    let countIngredients = 1;
    let countMeasures = 1;
    for (const key in mealRecipe) {
      const strIngredient = `strIngredient${countIngredients}`;
      const strMeasure = `strMeasure${countMeasures}`;
      if (
        key === strIngredient &&
        mealRecipe[strIngredient] &&
        mealRecipe[strIngredient] !== undefined &&
        mealRecipe[strIngredient].trim !== "" &&
        mealRecipe[strIngredient] !== " " &&
        mealRecipe[strIngredient] !== null
      ) {
        // console.log(mealRecipe[strIngredient]);
        const li = document.createElement("li");
        li.innerText = mealRecipe[strIngredient];
        recipeIngredientsList.append(li);
        // console.log(key);
        countIngredients += 1;
        // console.log(countIngredients);
      } else if (
        key === strMeasure &&
        mealRecipe[strMeasure] &&
        mealRecipe[strMeasure] !== undefined &&
        mealRecipe[strMeasure] !== " " &&
        mealRecipe[strMeasure].trim !== "" &&
        mealRecipe[strMeasure] !== null
      ) {
        const li = document.createElement("li");
        li.innerText = mealRecipe[strMeasure];
        recipeMeasureList.append(li);
        // console.log(key);
        countMeasures += 1;
        // console.log(countMeasures);
      }
    }

    // // --- insert data in li elements
    // Array.from(recipeIngredientsLiElements).forEach((el, ind) => {
    //   const strIngredient = `strIngredient${ind + 1}`;
    //   // console.log(strIngredient, mealRecipe[strIngredient]);
    //   el.innerText = mealRecipe[strIngredient];
    // });

    // Array.from(recipeMeasureLiElements).forEach((el, ind) => {
    //   const strMeasure = `strMeasure${ind + 1}`;
    //   // console.log(strMeasure, mealRecipe[strMeasure]);
    //   el.innerText = mealRecipe[strMeasure];
    // });

    // // --- DOM elements for bottom block
    // const recipeInstruction = document.querySelector(".meal-recipe__info-text");
    // recipeInstruction.innerText = mealRecipe.strInstructions;
}

//   mealContainer.addEventListener("click", async (e) => {
//     const clickedEl = e.target;
//     const clickedCard = clickedEl.closest(".main__card");
//     const clickedCardId = clickedCard.getAttribute("id");

//     const mealRecipe = await getMealById(clickedCardId);
//     // console.log("mealRecipe", mealRecipe);
//     mainRecipeContainer.style.visibility = "visible";

//     // --- add content to recipe container
//     // --- DOM elements for top block
//     const recipeImg = document.querySelector(".meal-recipe__img");
//     const recipeTitle = document.querySelector(".meal-recipe__title");
//     const recipeArea = document.querySelector(".meal-recipe__area");
//     const recipeCategory = document.querySelector(".meal-recipe__category");

//     // --- insert content
//     recipeImg.setAttribute("src", mealRecipe.strMealThumb);
//     recipeTitle.innerText = mealRecipe.strMeal;
//     recipeArea.innerText = mealRecipe.strArea;
//     recipeCategory.innerText = mealRecipe.strCategory;

//     // --- DOM elements for middle block
//     const recipeIngredientsList = document.querySelector(
//       ".meal-recipe__ingredients-list"
//     );
//     // const recipeIngredientsLiElements = recipeIngredientsList.children;
//     const recipeMeasureList = document.querySelector(
//       ".meal-recipe__measures-list"
//     );
//     // const recipeMeasureLiElements = recipeMeasureList.children;

//     let countIngredients = 1;
//     let countMeasures = 1;
//     for (const key in mealRecipe) {
//       const strIngredient = `strIngredient${countIngredients}`;
//       const strMeasure = `strMeasure${countMeasures}`;
//       if (
//         key === strIngredient &&
//         mealRecipe[strIngredient] &&
//         mealRecipe[strIngredient] !== undefined &&
//         mealRecipe[strIngredient].trim !== "" &&
//         mealRecipe[strIngredient] !== " " &&
//         mealRecipe[strIngredient] !== null
//       ) {
//         // console.log(mealRecipe[strIngredient]);
//         const li = document.createElement("li");
//         li.innerText = mealRecipe[strIngredient];
//         recipeIngredientsList.append(li);
//         // console.log(key);
//         countIngredients += 1;
//         // console.log(countIngredients);
//       } else if (
//         key === strMeasure &&
//         mealRecipe[strMeasure] &&
//         mealRecipe[strMeasure] !== undefined &&
//         mealRecipe[strMeasure] !== " " &&
//         mealRecipe[strMeasure].trim !== "" &&
//         mealRecipe[strMeasure] !== null
//       ) {
//         const li = document.createElement("li");
//         li.innerText = mealRecipe[strMeasure];
//         recipeMeasureList.append(li);
//         // console.log(key);
//         countMeasures += 1;
//         // console.log(countMeasures);
//       }
//     }

//     // // --- insert data in li elements
//     // Array.from(recipeIngredientsLiElements).forEach((el, ind) => {
//     //   const strIngredient = `strIngredient${ind + 1}`;
//     //   // console.log(strIngredient, mealRecipe[strIngredient]);
//     //   el.innerText = mealRecipe[strIngredient];
//     // });

//     // Array.from(recipeMeasureLiElements).forEach((el, ind) => {
//     //   const strMeasure = `strMeasure${ind + 1}`;
//     //   // console.log(strMeasure, mealRecipe[strMeasure]);
//     //   el.innerText = mealRecipe[strMeasure];
//     // });

//     // --- DOM elements for bottom block
//     const recipeInstruction = document.querySelector(".meal-recipe__info-text");
//     recipeInstruction.innerText = mealRecipe.strInstructions;
//   });

// --- close btn event
// if (closeBtn) {
//   closeBtn.addEventListener("click", (e) => {
//     // console.log(e.target);
//     // console.log(mainRecipeContainer);
//     // mainRecipeContainer.style.visibility = "hidden";
//   });
// }

window.addEventListener('DOMContentLoaded', loadRecipe)