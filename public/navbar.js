const pages = [
  "/index",
  "/o-mnie",
  "/program",
  "/zanim-zaczniemy",
  "/zanim-zaczniemy-2",
  "/zanim-zaczniemy-3",
  "/zanim-zaczniemy-4",
  "/basic-blockchain",
  "/basic-blockchain-1",
  "/basic-blockchain-2",
  "/basic-blockchain-3",
  "/basic-blockchain-4",
  "/proof-of-work",
  "/proof-of-work-1",
  "/proof-of-work-2",
  "/proof-of-work-3",
  "/transactions",
  "/transactions-1",
  "/transactions-2",
  "/transactions-3",
  "/signing",
  "/signing-1",
  "/signing-2",
  "/signing-3",
  "/signing-4",
  "/credits",
];

document.addEventListener("keydown", function (event) {
  let currentIndex = pages.indexOf(location.pathname);

  //right arrow
  if (event.keyCode == 39 && (currentIndex + 1) < pages.length) {
    event.preventDefault();
    location.assign(pages[currentIndex + 1]);
  } else if (event.keyCode == 37 /* left */ && currentIndex >= 1) {
    event.preventDefault();
    location.assign(pages[currentIndex - 1]);
  }
});
