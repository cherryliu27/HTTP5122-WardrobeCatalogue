var categories = ["tops", "bottoms", "outerwear", "bags", "shoes"];

var clothingData = {
  tops: [
    {
      id: 1,
      title: "pink vneck sweater",
      season: "winter",
      img: "./images/top1.png",
    },
    {
      id: 2,
      title: "cream vneck sweater",
      season: "winter",
      img: "./images/top2.png",
    },
    {
      id: 3,
      title: "blue vneck sweater",
      season: "winter",
      img: "./images/top3.png",
    },
    {
      id: 4,
      title: "hollister striped pink sweater",
      season: "winter",
      img: "./images/top4.png",
    },
    {
      id: 5,
      title: "purple sweater",
      season: "winter",
      img: "./images/top5.png",
    },
    {
      id: 6,
      title: "hoodie",
      season: "winter",
      img: "./images/top6.png",
    },
    {
      id: 7,
      title: "rolarola navy sweater",
      season: "winter",
      img: "./images/top7.png",
    },
    {
      id: 8,
      title: "pull and bear red sweater",
      season: "winter",
      img: "./images/top8.png",
    },
    {
      id: 9,
      title: "oversized black tshirt",
      season: "summer",
      img: "./images/top9.png",
    },
    {
      id: 10,
      title: "oversized white tshirt",
      season: "summer",
      img: "./images/top10.png",
    },
    {
      id: 11,
      title: "green crop vest",
      season: "summer",
      img: "./images/top11.png",
    },
    {
      id: 12,
      title: "cropped white vest",
      season: "summer",
      img: "./images/top12.png",
    },
    {
      id: 13,
      title: "pink crop top",
      season: "summer",
      img: "./images/top13.png",
    },
    {
      id: 14,
      title: "white strap crop top",
      season: "summer",
      img: "./images/top14.png",
    },
    {
      id: 15,
      title: "black strap crop top",
      season: "summer",
      img: "./images/top15.png",
    },
  ],
  bottoms: [
    {
      id: 1,
      title: "light blue jeans",
      season: "winter summer",
      img: "./images/bottom1.png",
    },
    {
      id: 2,
      title: "white elastic pants",
      season: "winter summer",
      img: "./images/bottom2.png",
    },
    {
      id: 3,
      title: "grey slacks",
      season: "winter summer",
      img: "./images/bottom3.png",
    },
    {
      id: 4,
      title: "navy jeans",
      season: "winter summer",
      img: "./images/bottom4.png",
    },
    {
      id: 5,
      title: "beige slacks",
      season: "winter summer",
      img: "./images/bottom5.png",
    },
    {
      id: 6,
      title: "white jeans",
      season: "winter summer",
      img: "./images/bottom6.png",
    },
    {
      id: 7,
      title: "black skirt",
      season: "summer",
      img: "./images/bottom7.png",
    },
    {
      id: 8,
      title: "blue shorts",
      season: "summer",
      img: "./images/bottom8.png",
    },
    {
      id: 9,
      title: "grey skirt",
      season: "summer",
      img: "./images/bottom9.png",
    },
    {
      id: 10,
      title: "white skirt",
      season: "summer",
      img: "./images/bottom10.png",
    },
  ],
  outerwear: [
    {
      id: 1,
      title: "uniqlo cream cardigan",
      season: "summer",
      img: "./images/coat1.png",
    },
    {
      id: 2,
      title: "white down jacket",
      season: "winter",
      img: "./images/coat2.png",
    },
    {
      id: 3,
      title: "cider white coat",
      season: "winter",
      img: "./images/coat3.png",
    },
    {
      id: 4,
      title: "snow duffle coat",
      season: "winter",
      img: "./images/coat4.png",
    },
    {
      id: 5,
      title: "light cream cardigan",
      season: "summer",
      img: "./images/coat5.png",
    },
    {
      id: 6,
      title: "purple cream cardigan",
      season: "summer",
      img: "./images/coat6.png",
    },
    {
      id: 7,
      title: "blue padded jacket",
      season: "winter",
      img: "./images/coat7.png",
    },
    {
      id: 8,
      title: "brown long coat",
      season: "winter",
      img: "./images/coat8.png",
    },
    {
      id: 9,
      title: "light blue cardigan",
      season: "summer",
      img: "./images/coat9.png",
    },
    {
      id: 10,
      title: "white holister cardigan",
      season: "summer",
      img: "./images/coat10.png",
    },
  ],
  bags: [
    {
      id: 1,
      title: "marithe francois girbaud totebag",
      season: "winter summer",
      img: "./images/bag1.png",
    },
    {
      id: 2,
      title: "british museum totebag",
      season: "winter summer",
      img: "./images/bag2.png",
    },
    {
      id: 3,
      title: "beige crossbody bag",
      season: "winter summer",
      img: "./images/bag3.png",
    },
    {
      id: 4,
      title: "dark brown crossbody bag",
      season: "winter summer",
      img: "./images/bag4.png",
    },
    {
      id: 5,
      title: "jwpei handbag",
      season: "summer",
      img: "./images/bag5.png",
    },
  ],
  shoes: [
    {
      id: 1,
      title: "veja sneakers",
      season: "winter summer",
      img: "./images/shoes1.png",
    },
    {
      id: 2,
      title: "black boots",
      season: "winter summer",
      img: "./images/shoes2.png",
    },
    {
      id: 3,
      title: "snow uggs",
      season: "winter",
      img: "./images/shoes3.png",
    },
    {
      id: 4,
      title: "addidas sport shoes",
      season: "winter summer",
      img: "./images/shoes4.png",
    },
  ],
};

window.onload = function () {
  // Call Get Current Temperature Function
  getTemp();

  // Dynamically Populate clothing items into corresponding sections
  var sectionContainers = document.querySelectorAll(".section-container");
  displayClothes(clothingData);

  // Filter clothes when clicked on filter buttons
  var filterBtns = document.querySelectorAll(".filter-btn");
  filterClothes();

  // Call function to generate outfit once user  clicks on "Generate Outfit"
  var generateBtn = document.querySelector(".generateBtn");
  // Add event listener to the "Generate Outfit" button
  generateBtn.addEventListener("click", generateOutfit);

  // Call function to reset items
  var resetBtn = document.querySelector(".resetBtn");
  resetBtn.onclick = reset;

  //  -------------------- FUNCTIONS -------------------- //

  // *** --- FUNCTION 1 : GET CURRENT TEMPERATURE --- ***
  function getTemp() {
    var currentTemp = document.querySelector(".todayTemp");

    const myAPIkey = "f1c1d78774934b6f56d3577cb0bad9d4";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=" +
      myAPIkey +
      "&units=metric";

    //retrieve api data
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = xhr.response;

          // output properties from data object to DOM
          var str = data.weather[0].description;
          currentTemp.innerHTML =
            Math.round(data.main.temp) +
            "&deg;C   " +
            str[0].toUpperCase() +
            str.slice(1);
        } else {
          //handle error
          currentTemp.innerHTML =
            "Cannot retrieve temperature, API call unsuccessful";
          console.log(xhr.status);
        }
      }
    };

    xhr.open("GET", url); //request url variable
    xhr.responseType = "json"; //specify for json format
    xhr.send(null);
  }

  // *** --- FUNCTION 2 : DISPLAY CLOTHING ITEMS PER SECTION --- ***
  function displayClothes(data) {
    sectionContainers.forEach(function (section) {
      // write html tags for all the images in the corresponding section
      var getClothes = data[section.id].map(function (item) {
        return `<img src="${item.img}" alt="${item.title}" class="itemImg selectable" tabindex="0">`;
      });

      //concat array into a string and output to DOM
      getClothes = getClothes.join("");
      var imageContainer = section.querySelector(".img-container");
      imageContainer.innerHTML = getClothes;
    });

    reset(); // reset borders of all selected item and brings users to top of the page

    // Call function to add border to selected items when user clicks on an item and to ensure that each category can select one item only
    var imageContainers = document.querySelectorAll(".img-container");
    imageContainers.forEach(function (imageContainer) {
      toggleImageSelect(imageContainer);
    });
  }

  // *** --- FUNCTION 3 : GENERATE OUTFIT BASED ON SELECTED ITEMS --- ***
  function generateOutfit() {
    // Select all the elements with class "selected"
    var selectedImages = document.querySelectorAll(".selected");

    var getSelectedImages = "";
    var selectedCategory = [];

    // write html tags for all selected images
    selectedImages.forEach(function (selectedImage) {
      getSelectedImages += `<img src="${selectedImage.src}" alt="${selectedImage.alt}" class="selected-${selectedImage.parentElement.parentElement.id}">`;
      // get all the categories that user have selected to validate whether there are any missing categories
      selectedCategory.push(`${selectedImage.parentElement.parentElement.id}`);
    });

    // call function to validate selected items categories
    validateSelection(selectedCategory, getSelectedImages);
  }

  // *** --- FUNCTION 4 : VALIDATE SELECTION OF ITEMS --- ***
  // if there is missing item from a category, ther will be a message prompt telling user to select from the missing category
  // if there are no missing items, continue to output image tags to DOM for display
  // Note*: outerwear is not a required category
  function validateSelection(selectedCategory, getSelectedImages) {
    var combinedImage = document.querySelector(".result");

    if (!selectedCategory.includes("tops")) {
      alert("Please select a top.");
    } else if (!selectedCategory.includes("bottoms")) {
      alert("Please select bottoms");
    } else if (!selectedCategory.includes("bags")) {
      alert("Please select a bag");
    } else if (!selectedCategory.includes("shoes")) {
      alert("Please select shoes");
    } else {
      combinedImage.innerHTML = getSelectedImages;
      var ootdSection = document.querySelector("#ootd");
      ootdSection.scrollIntoView();
    }
  }

  // // ***--- FUNCTION 5 : TOGGLE BORDER FOR SELECTED ITEM ---
  // function toggleImageSelect(Container) {
  //   var images = Container.querySelectorAll(".itemImg");
  //   images.forEach(function (image) {
  //     image.addEventListener("click", function () {
  //       images.forEach(function (item) {
  //         //ensure that no more than 1 item is selected from each category
  //         if (item != image) {
  //           item.classList.remove("selected");
  //         }
  //       });
  //       // creates border around the selected item
  //       image.classList.toggle("selected");
  //     });
  //   });
  // }

  function toggleImageSelect(Container) {
    var images = Container.querySelectorAll(".itemImg");
    images.forEach(function (image) {
      // Function to handle selection
      function handleSelection() {
        images.forEach(function (item) {
          // Ensure that no more than 1 item is selected from each category
          if (item != image) {
            item.classList.remove("selected");
          }
        });
        // Toggle border around the selected item
        image.classList.toggle("selected");
      }

      // Add click event listener
      image.addEventListener("click", handleSelection);

      // Add keydown event listener for the "Enter" key
      image.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          handleSelection();
        }
      });
    });
  }

  // ***--- FUNCTION 6 : FILTER BUTTONS ---
  function filterClothes() {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        var season = e.currentTarget.dataset.id;
        var newList = {};

        // filter items for each category within the categories array
        categories.forEach(function (category) {
          var seasonClothes = clothingData[category].filter(function (
            seasonItem
          ) {
            if (seasonItem.season.includes(season)) {
              return seasonItem;
            }
          });

          // create new object with filtered items
          newList[category] = seasonClothes;
        });

        // display items based on filtered items
        if (season === "all") {
          displayClothes(clothingData);
        } else {
          displayClothes(newList);
        }
      });
    });
  }

  // ***--- FUNCTION 7 : RESET ---
  // remove borders from selected images and bring user back to the top of the page
  function reset() {
    var selectedImages = document.querySelectorAll(".selected");
    selectedImages.forEach(function (image) {
      image.classList.remove("selected");
    });
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Enter") {
      document.body.classList.remove("no-outline");
    }
  });

  document.addEventListener("mousedown", function () {
    document.body.classList.add("no-outline");
  });

  // Handling item selection with enter key
  // document.querySelectorAll(".itemImg").forEach((item) => {
  //   item.addEventListener("keydown", function (e) {
  //     if (e.key === "Enter") {
  //       document
  //         .querySelectorAll(".itemImg")
  //         .forEach((i) => i.classList.remove("selected"));
  //       item.classList.add("selected");
  //     }
  //   });

  // function toggleImageSelectFocus(Container) {
  //   var images = Container.querySelectorAll(".itemImg");
  //   images.forEach(function (image) {
  //     image.addEventListener("keydown", function (e) {
  //       if (e.key === "Enter") {
  //         images.forEach(function (item) {
  //           //ensure that no more than 1 item is selected from each category
  //           if (item != image) {
  //             item.classList.remove("selected");
  //           }
  //         });
  //         // creates border around the selected item
  //         image.classList.toggle("selected");
  //       }
  //     });
  //   });
  // }

  // item.addEventListener("click", function () {
  //   document
  //     .querySelectorAll(".itemImg")
  //     .forEach((i) => i.classList.remove("selected"));
  //   item.classList.add("selected");
  // });
};
