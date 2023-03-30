// let activeIndex= 0;

// const groups = document.getElementsByClassName("card-group");

// const handleLikeClick = () => {
//     const nextIndex = activeIndex + 1 <= groups.length -1 ? activeIndex + 1 : 0;

//     const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
//         nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

//     currentGroup.dataset.status = "after";

//     nextGroup.dataset.status ="becoming-active-from-before";

//     setTimeout(() => {
//         nextGroup.dataset.status ="active";
//         activeIndex = nextIndex;
//         });
//     }

// const handleDislikeClick = () => {
//     const nextIndex = activeIndex - 1 >= 0 ? activeIndex -1 : groups.length - 1;

//     const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
//     nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

//     currentGroup.dataset.status = "before";

//     nextGroup.dataset.status ="becoming-active-from-after";

//     setTimeout(() => {
//         activeIndex = nextIndex;
//         nextGroup.dataset.status = "active";
//     });    
// }
let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`), 
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    },300);
}


const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGroup.dataset.status = "before";

  nextGroup.dataset.status = "becoming-active-from-after";

//   setTimeout(() => {
//     nextGroup.dataset.status = "active";
//     activeIndex = nextIndex;
//   });
// }

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  },300);
};

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
     handleLeftClick();
    } else if (event.code === "ArrowRight") {
    handleRightClick();
    }
  });

