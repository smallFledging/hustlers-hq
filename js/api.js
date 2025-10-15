export async function getMealById(id) {
  const mealDetailsByIdObj = await getData(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const mealDetails = mealDetailsByIdObj.meals[0];
  console.log("mealDetails", mealDetails);
  return mealDetails;
}

export async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
}