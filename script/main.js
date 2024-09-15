// Navbar
// -- Navbar Menu
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    navbar.classList.add("bg-white/90", "backdrop-blur", "shadow-lg");
  } else {
    navbar.classList.remove("bg-white/90", "backdrop-blur", "shadow-lg");
  }
});

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  menuButton.classList.toggle("active");
});

// Social media
const socialMediaData = [
  {
    name: "Instagram",
    iconPath: "assets/icons/instagram.svg",
    link: "",
  },
  {
    name: "Facebook",
    iconPath: "assets/icons/facebook.svg",
    link: "",
  },
  {
    name: "Discord",
    iconPath: "assets/icons/discord.svg",
    link: "",
  },
  {
    name: "YouTube",
    iconPath: "assets/icons/youtube.svg",
    link: "",
  },
  {
    name: "GitHub",
    iconPath: "assets/icons/github.svg",
    link: "",
  },
];

socialMediaData.map(({ name, link, iconPath }) => {
  const socialMediaContainer = document.getElementById(
    "social-media-container"
  );
  const socialMediaIcon = document.createElement("img");
  socialMediaIcon.src = iconPath;
  socialMediaIcon.height = 50;
  socialMediaIcon.width = 50;
  socialMediaIcon.classList.add(
    "group-hover:scale-125",
    "transition",
    "duration-300",
    "ease-in-out"
  );

  const socialMediaLable = document.createElement("h6");
  socialMediaLable.innerHTML = name;

  const socialMediaCard = document.createElement("a");
  socialMediaCard.href = link;
  socialMediaCard.target = "_blank";
  socialMediaCard.title = name;
  socialMediaCard.appendChild(socialMediaIcon);
  socialMediaCard.appendChild(socialMediaLable);
  socialMediaCard.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "font-semibold",
    "group"
  );

  socialMediaContainer.appendChild(socialMediaCard);
});
