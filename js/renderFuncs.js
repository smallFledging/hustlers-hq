// --- render functions

export function renderMealCard(container, imgURL, mealTitle, url) {
  const cardLink = document.createElement("a");
  cardLink.setAttribute("href", url);
  const card = document.createElement("div");
  card.classList.add("main__card");
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", imgURL);
  const cardTitle = document.createElement("h3");
  cardTitle.innerText = mealTitle;

  card.append(cardImg);
  card.append(cardTitle);
  cardLink.append(card);
  container.append(cardLink);
}

export function renderMealsCategories(container, imgURL, mealTitle, info, url) {
  const cardLink = document.createElement("div");
  cardLink.setAttribute("href", url);
  const card = document.createElement("div");
  card.classList.add("main__category");
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", imgURL);
  const cardTitle = document.createElement("h3");
  cardTitle.innerText = mealTitle;
  const cardInfo = document.createElement('p')
  cardInfo.innerText = info

  card.append(cardImg);
  card.append(cardTitle);
  card.append(cardInfo)
  cardLink.append(card);
  container.append(cardLink);
}
