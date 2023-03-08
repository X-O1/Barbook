//FRONT-END ELEMENTS
const title = document.querySelector(".drink-title input");
const ingredientsContainer = document.querySelector(".drink-ingredients");
const ingredientsList = document.querySelectorAll(".drink-ingredients li");
const ingredientsListInput = document.querySelectorAll(
  ".drink-ingredients li input"
);
const ingredient1 = document.querySelector(".ingredient-1");
const ingredient2 = document.querySelector(".ingredient-2");
const ingredient3 = document.querySelector(".ingredient-3");
const ingredient4 = document.querySelector(".ingredient-4");
const ingredient5 = document.querySelector(".ingredient-5");
const ingredient6 = document.querySelector(".ingredient-6");
const ingredient7 = document.querySelector(".ingredient-7");
const ingredient8 = document.querySelector(".ingredient-8");
const ingredient1Input = document.querySelector(".ingredient-1 input");
const ingredient2Input = document.querySelector(".ingredient-2 input");
const ingredient3Input = document.querySelector(".ingredient-3 input");
const ingredient4Input = document.querySelector(".ingredient-4 input");
const ingredient5Input = document.querySelector(".ingredient-5 input");
const ingredient6Input = document.querySelector(".ingredient-6 input");
const ingredient7Input = document.querySelector(".ingredient-7 input");
const ingredient8Input = document.querySelector(".ingredient-8 input");
const description = document.querySelector(".drink-description textarea");
const done = document.getElementById("done");
const edit = document.getElementById("edit");
const add = document.getElementById("add");
const buildButton = document.getElementById("buildButton");
const doneEdit = document.getElementById("doneEdit");
const homePage = document.getElementById("homePage");
const closeButton = document.querySelector(".close-button");
const deleteCloseButton = document.querySelector(".delete-close-button");
const indexListAddButton = document.querySelector(".index-list-add");
const deleteButton = document.querySelector(".delete-button");
const addFavButton = document.querySelector(".add-fav-button");
const deleteFavButton = document.querySelector(".delete-fav-button");
const indexList = document.getElementById("indexList");
const indexCard = document.querySelectorAll(".index-card");
const indexLabels = document.getElementById("indexLabels");
const indexListTitle = document.querySelector(".index-list-title");
const drinkCard = document.querySelector(".drink-card");
const closeRolodexMenu = document.querySelector(".close-rolodex-menu");
const closeBuildMenu = document.querySelector(".close-build-menu");
const rolodexTab = document.getElementById("rolodexTab");
const buildTab = document.querySelector(".build-tab");
const buildTabLinks = document.querySelectorAll(".link");
const buildCocktailLink = document.querySelector(".build-cocktail-link");
const toolsTab = document.getElementById("toolsTab");
const navigationContainer = document.getElementById("navigationContainer");
const surpriseMeContainer = document.querySelector(".surprise-me-container");
const randomDrink = document.querySelector(".random-drink");
const surpriseMeButton = document.querySelector(".surprise-me-button");
const rolodexTitle = document.querySelector(".rolodex-title");

const allIndex = document.getElementById("allIndex");
const aIndex = document.getElementById("aIndex");
const bIndex = document.getElementById("bIndex");
const cIndex = document.getElementById("cIndex");
const dIndex = document.getElementById("dIndex");
const eIndex = document.getElementById("eIndex");
const fIndex = document.getElementById("fIndex");
const gIndex = document.getElementById("gIndex");
const hIndex = document.getElementById("hIndex");
const iIndex = document.getElementById("iIndex");
const jIndex = document.getElementById("jIndex");
const kIndex = document.getElementById("kIndex");
const lIndex = document.getElementById("lIndex");
const mIndex = document.getElementById("mIndex");
const nIndex = document.getElementById("nIndex");
const oIndex = document.getElementById("oIndex");
const pIndex = document.getElementById("pIndex");
const qIndex = document.getElementById("qIndex");
const rIndex = document.getElementById("rIndex");
const sIndex = document.getElementById("sIndex");
const tIndex = document.getElementById("tIndex");
const uIndex = document.getElementById("uIndex");
const vIndex = document.getElementById("vIndex");
const wIndex = document.getElementById("wIndex");
const xIndex = document.getElementById("xIndex");
const yIndex = document.getElementById("yIndex");
const zIndex = document.getElementById("zIndex");
const favIndex = document.getElementById("favIndex");
//INDEX CARDS
let indexA = [];
let indexB = [];
let indexC = [];
let indexD = [];
let indexE = [];
let indexF = [];
let indexG = [];
let indexH = [];
let indexI = [];
let indexJ = [];
let indexK = [];
let indexL = [];
let indexM = [];
let indexN = [];
let indexO = [];
let indexP = [];
let indexQ = [];
let indexR = [];
let indexS = [];
let indexT = [];
let indexU = [];
let indexV = [];
let indexW = [];
let indexX = [];
let indexY = [];
let indexZ = [];
let indexFav = [];
let indexMisc = [];
const allLetterIndex = [
  indexA,
  indexB,
  indexC,
  indexD,
  indexE,
  indexF,
  indexG,
  indexH,
  indexI,
  indexJ,
  indexK,
  indexL,
  indexM,
  indexN,
  indexO,
  indexP,
  indexQ,
  indexR,
  indexS,
  indexT,
  indexU,
  indexV,
  indexW,
  indexX,
  indexY,
  indexZ,
];

//LOCAL STORAGE
const allCocktails = JSON.parse(localStorage.getItem("cocktails")) || [];
// NAVIGATION
rolodexTab.addEventListener("click", () => {
  indexCard.forEach((card) => {
    card.style.transform = "translateX(0)";
  });
  navigationContainer.style.transform = "translateX(-50%)";
  closeRolodexMenu.style.transform = "translateY(100%)";
  allIndex.style.transform = "translateY(0)";
  randomDrink.innerText = "";
  rolodexTitle.innerHTML = "Rolodex";
});
buildTab.addEventListener("click", () => {
  buildTabLinks.forEach((link) => {
    link.style.transform = "translateX(80%)";
  });
  closeBuildMenu.style.transform = "translateY(200%)";
  rolodexTab.style.transform = "translateX(-80%)";
  buildTab.style.transform = "translateX(-80%)";
  toolsTab.style.transform = "translateX(-80%)";
  randomDrink.innerText = "";
  rolodexTitle.innerHTML = "Build";
  randomDrink.style.display = "none";
  surpriseMeContainer.style.margin = "auto auto -30px auto";
});
closeBuildMenu.addEventListener("click", () => {
  buildTabLinks.forEach((link) => {
    link.style.transform = "translateX(-80%)";
  });
  closeBuildMenu.style.transform = "translateY(310%)";
  rolodexTab.style.transform = "translateX(0)";
  buildTab.style.transform = "translateX(0)";
  toolsTab.style.transform = "translateX(0)";
  homePage.style.display = "flex";
  indexList.style.display = "none";
  drinkCard.style.display = "none";
  rolodexTitle.innerHTML = "Home";
  randomDrink.style.display = "none";
  surpriseMeContainer.style.margin = "auto auto -30px auto";
});
closeRolodexMenu.addEventListener("click", () => {
  indexCard.forEach((card) => {
    card.style.transform = "translateX(-50%)";
  });
  buildTabLinks.forEach((link) => {
    link.style.transform = "translateX(-80%)";
  });
  navigationContainer.style.transform = "translateX(0)";
  closeRolodexMenu.style.transform = "translateY(200%)";
  allIndex.style.transform = "translateY(100%)";
  rolodexTab.style.transform = "translateX(0)";
  buildTab.style.transform = "translateX(0)";
  toolsTab.style.transform = "translateX(0)";
  homePage.style.display = "flex";
  indexList.style.display = "none";
  drinkCard.style.display = "none";
  rolodexTitle.innerHTML = "Home";
  randomDrink.style.display = "none";
  surpriseMeContainer.style.margin = "auto auto -30px auto";
});
//SURPRISE ME
surpriseMeButton.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * allCocktails.length);
  surpriseMeContainer.style.margin = "auto auto 40px auto";
  randomDrink.style.display = "flex";
  randomDrink.innerText = allCocktails[randomNumber].title;
});
randomDrink.addEventListener("click", () => {
  drinkCard.style.display = "flex";

  allCocktails.forEach((index) => {
    if (randomDrink.innerHTML === index.title && index.favorite === false) {
      title.value = index.title;
      ingredient1Input.value = index.ingredient1;
      ingredient2Input.value = index.ingredient2;
      ingredient3Input.value = index.ingredient3;
      ingredient4Input.value = index.ingredient4;
      ingredient5Input.value = index.ingredient5;
      ingredient6Input.value = index.ingredient6;
      ingredient7Input.value = index.ingredient7;
      ingredient8Input.value = index.ingredient8;
      description.value = index.description;
      addFavButton.style.display = "block";
      deleteFavButton.style.display = "none";
    } else if (
      randomDrink.innerHTML === index.title &&
      index.favorite === true
    ) {
      title.value = index.title;
      ingredient1Input.value = index.ingredient1;
      ingredient2Input.value = index.ingredient2;
      ingredient3Input.value = index.ingredient3;
      ingredient4Input.value = index.ingredient4;
      ingredient5Input.value = index.ingredient5;
      ingredient6Input.value = index.ingredient6;
      ingredient7Input.value = index.ingredient7;
      ingredient8Input.value = index.ingredient8;
      description.value = index.description;
      addFavButton.style.display = "none";
      deleteFavButton.style.display = "block";
    }

    allCocktails.forEach((drink) => {
      if (title.value === drink.title) {
        drink.ingredient1 === ""
          ? (ingredient1.style.display = "none")
          : (ingredient1.style.display = "list-item");
        drink.ingredient2 === ""
          ? (ingredient2.style.display = "none")
          : (ingredient2.style.display = "list-item");
        drink.ingredient3 === ""
          ? (ingredient3.style.display = "none")
          : (ingredient3.style.display = "list-item");
        drink.ingredient4 === ""
          ? (ingredient4.style.display = "none")
          : (ingredient4.style.display = "list-item");
        drink.ingredient5 === ""
          ? (ingredient5.style.display = "none")
          : (ingredient5.style.display = "list-item");
        drink.ingredient6 === ""
          ? (ingredient6.style.display = "none")
          : (ingredient6.style.display = "list-item");
        drink.ingredient7 === ""
          ? (ingredient7.style.display = "none")
          : (ingredient7.style.display = "list-item");
        drink.ingredient8 === ""
          ? (ingredient8.style.display = "none")
          : (ingredient8.style.display = "list-item");
      }
    });
  });
  navigationContainer.style.transform = "translateX(-50%)";
  closeRolodexMenu.style.transform = "translateY(100%)";
  allIndex.style.transform = "translateY(0)";
  randomDrink.innerText = "";
  rolodexTitle.innerHTML = "Rolodex";
  indexCard.forEach((card) => {
    card.style.transform = "translateX(0)";
  });
});
//CREATE A COCKTAIL
const addCocktail = () => {
  const cocktail = {
    title: document.querySelector(".drink-title input").value,
    ingredient1: document.querySelector(".ingredient-1 input").value,
    ingredient2: document.querySelector(".ingredient-2 input").value,
    ingredient3: document.querySelector(".ingredient-3 input").value,
    ingredient4: document.querySelector(".ingredient-4 input").value,
    ingredient5: document.querySelector(".ingredient-5 input").value,
    ingredient6: document.querySelector(".ingredient-6 input").value,
    ingredient7: document.querySelector(".ingredient-7 input").value,
    ingredient8: document.querySelector(".ingredient-8 input").value,
    description: document.querySelector(".drink-description textarea").value,
  };

  addFavButton.style.display === "block"
    ? (cocktail.favorite = false)
    : (cocktail.favorite = true);

  if (title.value != "" || description.value != "") {
    allCocktails.push(cocktail);
    localStorage.setItem("cocktails", JSON.stringify(allCocktails));
  }
};
//SORTING MECHANISM
const emptyIndex = () => {
  indexA = [];
  indexB = [];
  indexC = [];
  indexD = [];
  indexE = [];
  indexF = [];
  indexG = [];
  indexH = [];
  indexI = [];
  indexJ = [];
  indexK = [];
  indexL = [];
  indexM = [];
  indexN = [];
  indexO = [];
  indexP = [];
  indexQ = [];
  indexR = [];
  indexS = [];
  indexT = [];
  indexU = [];
  indexV = [];
  indexW = [];
  indexX = [];
  indexY = [];
  indexZ = [];
  indexFav = [];
  indexMisc = [];
};
const sortCoctails = () => {
  emptyIndex();

  allCocktails.forEach((drink) => {
    switch (drink.title[0]) {
      case "A":
      case "a":
        indexA.push(drink);
        break;
      case "B":
      case "b":
        indexB.push(drink);
        break;
      case "C":
      case "c":
        indexC.push(drink);
        break;
      case "D":
      case "d":
        indexD.push(drink);
        break;
      case "E":
      case "e":
        indexE.push(drink);
        break;
      case "F":
      case "f":
        indexF.push(drink);
        break;
      case "G":
      case "g":
        indexG.push(drink);
        break;
      case "H":
      case "h":
        indexH.push(drink);
        break;
      case "I":
      case "i":
        indexI.push(drink);
        break;
      case "J":
      case "j":
        indexJ.push(drink);
        break;
      case "K":
      case "k":
        indexK.push(drink);
        break;
      case "L":
      case "l":
        indexL.push(drink);
        break;
      case "M":
      case "m":
        indexM.push(drink);
        break;
      case "N":
      case "n":
        indexN.push(drink);
        break;
      case "O":
      case "o":
        indexO.push(drink);
        break;
      case "P":
      case "p":
        indexP.push(drink);
        break;
      case "Q":
      case "q":
        indexQ.push(drink);
        break;
      case "R":
      case "r":
        indexR.push(drink);
        break;
      case "S":
      case "s":
        indexS.push(drink);
        break;
      case "T":
      case "t":
        indexT.push(drink);
        break;
      case "U":
      case "u":
        indexU.push(drink);
        break;
      case "V":
      case "v":
        indexV.push(drink);
        break;
      case "W":
      case "w":
        indexW.push(drink);
        break;
      case "X":
      case "x":
        indexX.push(drink);
        break;
      case "Y":
      case "y":
        indexY.push(drink);
        break;
      case "Z":
      case "z":
        indexZ.push(drink);
        break;
      default:
        indexMisc.push(drink);
        break;
    }
  });
  allCocktails.forEach((fav) => {
    if (fav.favorite === true) {
      indexFav.push(fav);
    }
  });
};
//CLEARS FORM TO CREATE NEW DRINK
const createDrinkDisplay = () => {
  ingredient1.style.display = "list-item";
  ingredient2.style.display = "list-item";
  ingredient3.style.display = "list-item";
  ingredient4.style.display = "list-item";
  ingredient5.style.display = "list-item";
  ingredient6.style.display = "list-item";
  ingredient7.style.display = "list-item";
  ingredient8.style.display = "list-item";

  title.value = "";
  ingredient1Input.value = "";
  ingredient2Input.value = "";
  ingredient3Input.value = "";
  ingredient4Input.value = "";
  ingredient5Input.value = "";
  ingredient6Input.value = "";
  ingredient7Input.value = "";
  ingredient8Input.value = "";
  description.value = "";

  title.disabled = false;
  ingredient1Input.disabled = false;
  ingredient2Input.disabled = false;
  ingredient3Input.disabled = false;
  ingredient4Input.disabled = false;
  ingredient5Input.disabled = false;
  ingredient6Input.disabled = false;
  ingredient7Input.disabled = false;
  ingredient8Input.disabled = false;
  description.disabled = false;
};

//BUTTON EVENT LISTENERS
edit.addEventListener("click", () => {
  add.style.display = "none";
  edit.style.display = "none";
  addFavButton.style.display === "block"
    ? (addFavButton.style.display = "block")
    : (addFavButton.style.display = "none");
  deleteFavButton.style.display === "block"
    ? (deleteFavButton.style.display = "block")
    : (deleteFavButton.style.display = "none");
  done.style.display = "block";
  deleteButton.style.display = "block";
  deleteButton.style.display = "none";
  indexCard.forEach((card) => {
    card.style.transform = "translateX(-50%)";
  });
  closeRolodexMenu.style.transform = "translateY(200%)";
  allIndex.style.transform = "translateY(100%)";

  title.disabled = false;
  ingredient1Input.disabled = false;
  ingredient2Input.disabled = false;
  ingredient3Input.disabled = false;
  ingredient4Input.disabled = false;
  ingredient5Input.disabled = false;
  ingredient6Input.disabled = false;
  ingredient7Input.disabled = false;
  ingredient8Input.disabled = false;
  description.disabled = false;

  ingredient1.style.display = "list-item";
  ingredient2.style.display = "list-item";
  ingredient3.style.display = "list-item";
  ingredient4.style.display = "list-item";
  ingredient5.style.display = "list-item";
  ingredient6.style.display = "list-item";
  ingredient7.style.display = "list-item";
  ingredient8.style.display = "list-item";

  for (let i = 0; i < allCocktails.length; i++) {
    if (title.value === allCocktails[i].title) {
      allCocktails.splice(i, 1);
    }
  }
  for (let i = 0; i < allLetterIndex.length; i++) {
    for (let k = 0; k < allLetterIndex[i].length; k++) {
      if (title.value === allLetterIndex[i][k].title) {
        allLetterIndex[i].splice(k, 1);
      }
    }
  }
});

done.addEventListener("click", () => {
  addCocktail();

  done.style.display = "none";
  deleteButton.style.display = "block";
  edit.style.display = "block";
  add.style.display = "block";
  addFavButton.style.display === "block"
    ? (addFavButton.style.display = "block")
    : (addFavButton.style.display = "none");
  deleteFavButton.style.display === "block"
    ? (deleteFavButton.style.display = "block")
    : (deleteFavButton.style.display = "none");
  closeRolodexMenu.style.transform = "translateY(100%)";
  closeBuildMenu.style.transform = "translateY(310%)";
  navigationContainer.style.transform = "translateX(-50%)";
  allIndex.style.transform = "translateY(0)";
  indexCard.forEach((card) => {
    card.style.transform = "translateX(0%)";
  });

  title.disabled = true;
  ingredient1Input.disabled = true;
  ingredient2Input.disabled = true;
  ingredient3Input.disabled = true;
  ingredient4Input.disabled = true;
  ingredient5Input.disabled = true;
  ingredient6Input.disabled = true;
  ingredient7Input.disabled = true;
  ingredient8Input.disabled = true;
  description.disabled = true;

  allCocktails.forEach((drink) => {
    if (title.value === drink.title) {
      drink.ingredient1 === ""
        ? (ingredient1.style.display = "none")
        : (ingredient1.style.display = "list-item");
      drink.ingredient2 === ""
        ? (ingredient2.style.display = "none")
        : (ingredient2.style.display = "list-item");
      drink.ingredient3 === ""
        ? (ingredient3.style.display = "none")
        : (ingredient3.style.display = "list-item");
      drink.ingredient4 === ""
        ? (ingredient4.style.display = "none")
        : (ingredient4.style.display = "list-item");
      drink.ingredient5 === ""
        ? (ingredient5.style.display = "none")
        : (ingredient5.style.display = "list-item");
      drink.ingredient6 === ""
        ? (ingredient6.style.display = "none")
        : (ingredient6.style.display = "list-item");
      drink.ingredient7 === ""
        ? (ingredient7.style.display = "none")
        : (ingredient7.style.display = "list-item");
      drink.ingredient8 === ""
        ? (ingredient8.style.display = "none")
        : (ingredient8.style.display = "list-item");
    }
  });
});
add.addEventListener("click", () => {
  add.style.display = "none";
  edit.style.display = "none";
  addFavButton.style.display = "none";
  deleteFavButton.style.display = "none";
  deleteButton.style.display = "none";
  done.style.display = "block";
  description.style.display = "";
  deleteCloseButton.style.display = "none";
  edit.style.display = "none";
  closeRolodexMenu.style.transform = "translateY(200%)";
  allIndex.style.transform = "translateY(100%)";
  indexCard.forEach((card) => {
    card.style.transform = "translateX(-50%)";
  });

  createDrinkDisplay();
});
deleteButton.addEventListener("click", () => {
  // This deletes whatever drink you're viewing
  for (let i = 0; i < allCocktails.length; i++) {
    if (title.value === allCocktails[i].title) {
      allCocktails.splice(i, 1);
    }
  }
  for (let i = 0; i < allLetterIndex.length; i++) {
    for (let k = 0; k < allLetterIndex[i].length; k++) {
      if (title.value === allLetterIndex[i][k].title) {
        allLetterIndex[i].splice(k, 1);
      }
    }
  }
  for (let fav = 0; fav < indexFav.length; fav++) {
    if (title.value === indexFav[fav].title) {
      indexFav.splice(fav, 1);
    }
  }
  //This updates local storage data
  localStorage.setItem("cocktails", JSON.stringify(allCocktails));

  deleteCloseButton.style.display = "block";
  edit.style.display = "none";
  add.style.display = "block";
  deleteButton.style.display = "none";
  done.style.display = "none";
  ingredientsContainer.style.display = "none";
  description.style.display = "none";
  title.value = "DELETED";
  addFavButton.style.display = "none";
  deleteFavButton.style.display = "none";

  title.disabled = true;
  description.disabled = true;
});
deleteCloseButton.addEventListener("click", () => {
  homePage.style.display = "flex";
  indexList.style.display = "none";
  drinkCard.style.display = "none";
});
indexListAddButton.addEventListener("click", () => {
  homePage.style.display = "none";
  indexList.style.display = "none";
  addFavButton.style.display = "none";
  deleteFavButton.style.display = "none";
  add.style.display = "none";
  edit.style.display = "none";
  drinkCard.style.display = "flex";
  done.style.display = "block";
  ingredientsContainer.style.display = "";
  description.style.display = "";
  deleteCloseButton.style.display = "none";
  edit.style.display = "none";
  deleteButton.style.display = "none";
  indexCard.forEach((card) => {
    card.style.transform = "translateX(-50%)";
  });
  closeRolodexMenu.style.transform = "translateY(200%)";
  allIndex.style.transform = "translateY(100%)";

  createDrinkDisplay();
});
addFavButton.addEventListener("click", () => {
  for (let i = 0; i < allCocktails.length; i++) {
    if (title.value === allCocktails[i].title) {
      allCocktails[i].favorite = true;
      indexFav.push(allCocktails[i]);
    }
  }

  localStorage.setItem("cocktails", JSON.stringify(allCocktails));
  addFavButton.style.display = "none";
  deleteFavButton.style.display = "block";
});
deleteFavButton.addEventListener("click", () => {
  for (let i = 0; i < allCocktails.length; i++) {
    if (title.value === allCocktails[i].title) {
      allCocktails[i].favorite = false;
    }
  }
  for (let j = 0; j < indexFav.length; j++) {
    if (title.value === indexFav[j].title) {
      indexFav.splice(j, 1);
    }
  }

  localStorage.setItem("cocktails", JSON.stringify(allCocktails));
  deleteFavButton.style.display = "none";
  addFavButton.style.display = "block";
});
//MENU LINKS
buildCocktailLink.addEventListener("click", () => {
  rolodexTitle.innerHTML = "Build Cocktail";
  drinkCard.style.display = "flex";
  indexList.style.display = "none";
  homePage.style.display = "none";
  add.style.display = "none";
  edit.style.display = "none";
  addFavButton.style.display = "none";
  deleteFavButton.style.display = "none";
  deleteButton.style.display = "none";
  done.style.display = "block";
  ingredientsContainer.style.display = "";
  description.style.display = "";
  deleteCloseButton.style.display = "none";
  edit.style.display = "none";
  closeBuildMenu.style.transform = "translateY(310%)";
  closeRolodexMenu.style.transform = "translateY(200%)";
  allIndex.style.transform = "translateY(100%)";

  indexCard.forEach((card) => {
    card.style.transform = "translateX(-50%)";
  });

  createDrinkDisplay();
});
//HANDLES DISPLAYING THE CORRECT INFO WHEN VIEWING A DRINK CARD
const displayDrinkInfo = () => {
  const indexLabelsList = document.querySelectorAll(".index-labels li");
  indexLabelsList.forEach((label) => {
    label.addEventListener("click", () => {
      homePage.style.display = "none";
      indexList.style.display = "none";
      drinkCard.style.display = "flex";
      ingredientsContainer.style.display = "";
      description.style.display = "";
      deleteCloseButton.style.display = "none";
      edit.style.display = "block";
      deleteButton.style.display = "block";

      allCocktails.forEach((index) => {
        if (label.innerText === index.title && index.favorite === false) {
          title.value = index.title;
          ingredient1Input.value = index.ingredient1;
          ingredient2Input.value = index.ingredient2;
          ingredient3Input.value = index.ingredient3;
          ingredient4Input.value = index.ingredient4;
          ingredient5Input.value = index.ingredient5;
          ingredient6Input.value = index.ingredient6;
          ingredient7Input.value = index.ingredient7;
          ingredient8Input.value = index.ingredient8;
          description.value = index.description;
          addFavButton.style.display = "block";
          deleteFavButton.style.display = "none";
        } else if (label.innerText === index.title && index.favorite === true) {
          title.value = index.title;
          ingredient1Input.value = index.ingredient1;
          ingredient2Input.value = index.ingredient2;
          ingredient3Input.value = index.ingredient3;
          ingredient4Input.value = index.ingredient4;
          ingredient5Input.value = index.ingredient5;
          ingredient6Input.value = index.ingredient6;
          ingredient7Input.value = index.ingredient7;
          ingredient8Input.value = index.ingredient8;
          description.value = index.description;
          addFavButton.style.display = "none";
          deleteFavButton.style.display = "block";
        }

        allCocktails.forEach((drink) => {
          if (title.value === drink.title) {
            drink.ingredient1 === ""
              ? (ingredient1.style.display = "none")
              : (ingredient1.style.display = "list-item");
            drink.ingredient2 === ""
              ? (ingredient2.style.display = "none")
              : (ingredient2.style.display = "list-item");
            drink.ingredient3 === ""
              ? (ingredient3.style.display = "none")
              : (ingredient3.style.display = "list-item");
            drink.ingredient4 === ""
              ? (ingredient4.style.display = "none")
              : (ingredient4.style.display = "list-item");
            drink.ingredient5 === ""
              ? (ingredient5.style.display = "none")
              : (ingredient5.style.display = "list-item");
            drink.ingredient6 === ""
              ? (ingredient6.style.display = "none")
              : (ingredient6.style.display = "list-item");
            drink.ingredient7 === ""
              ? (ingredient7.style.display = "none")
              : (ingredient7.style.display = "list-item");
            drink.ingredient8 === ""
              ? (ingredient8.style.display = "none")
              : (ingredient8.style.display = "list-item");
          }
        });
      });
    });
  });
};

rolodexTab.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexListTitle.innerHTML = "All Cocktails";
  homePage.style.display = "none";
  indexList.style.display = "block";
  allCocktails.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
indexCard.forEach((label) => {
  label.addEventListener("click", () => {
    sortCoctails();
    indexListTitle.innerHTML = "Cocktails";
    indexList.style.display = "block";
    drinkCard.style.display = "none";
    homePage.style.display = "none";
    indexListAddButton.style.display = "block";
  });
});
favIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexListTitle.innerHTML = "Favorites";
  indexFav.forEach((label) => {
    if (label.favorite === true) {
      const drinkLabel = document.createElement("li");
      indexLabels.appendChild(drinkLabel);
      drinkLabel.innerText = label.title;
    }
  });
  displayDrinkInfo();
});
allIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexListTitle.innerHTML = "All Cocktails";
  homePage.style.display = "none";
  indexList.style.display = "block";
  drinkCard.style.display = "none";
  allCocktails.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
aIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexA.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
bIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexB.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
cIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexC.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
dIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexD.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
eIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexE.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
fIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexF.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
gIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexG.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
hIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexH.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
iIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexI.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
jIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexJ.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
kIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexK.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
lIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexL.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
mIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexM.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
nIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexN.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
oIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexO.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
pIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexP.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
qIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexQ.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
rIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexR.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
sIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexS.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
tIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexT.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
uIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexU.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
vIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexV.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
wIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexW.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
xIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexX.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
yIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexY.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
zIndex.addEventListener("click", () => {
  indexLabels.innerHTML = "";
  indexZ.forEach((label) => {
    const drinkLabel = document.createElement("li");
    indexLabels.appendChild(drinkLabel);
    drinkLabel.innerText = label.title;
  });
  displayDrinkInfo();
});
