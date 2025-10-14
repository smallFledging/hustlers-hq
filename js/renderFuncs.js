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

export function renderMealsCategories(container, imgURL, mealTitle, info, ind, url) {
  const cardLink = document.createElement("div");
  cardLink.setAttribute("href", url);
  const card = document.createElement("div");
  card.classList.add("main__category");
  card.classList.add("accordion-item"); //
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", imgURL);
  const cardTitle = document.createElement("h3");
  cardTitle.classList.add('accordion-header') //
  const cardBtn = document.createElement('button') //
  cardBtn.classList.add('accordion-button') //
  // 
cardBtn.setAttribute('type', 'button')
cardBtn.setAttribute('data-bs-toggle', 'collapse')
cardBtn.setAttribute('data-bs-target', `#collapse${ind}`)
cardBtn.setAttribute('aria-expanded', 'true')
cardBtn.setAttribute('aria-controls', `collapseOne${ind}`)
// 
  cardBtn.innerText = mealTitle; //
const cardInfoContainer = document.createElement('div')
cardInfoContainer.setAttribute('id', `collapse${ind}`)
cardInfoContainer.classList.add('accordion-collapse')
cardInfoContainer.classList.add('collapse')
// cardInfoContainer.classList.add('show')
cardInfoContainer.setAttribute('data-bs-parent', '#accordionExample')


//
  const cardInfo = document.createElement('p')
  cardInfo.classList.add('accordion-body')
  cardInfo.innerText = info


  // --- append el
cardInfoContainer.append(cardInfo)
  // 
  cardTitle.append(cardBtn)
  card.append(cardImg);
  card.append(cardTitle);
  // 
  card.append(cardInfoContainer)
  // card.append(cardInfo)
  cardLink.append(card);
  container.append(cardLink);
}
