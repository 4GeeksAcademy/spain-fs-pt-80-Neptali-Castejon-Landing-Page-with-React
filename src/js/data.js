
// Definimos los datos para el Navbar
export const navbarData = {
    brandName: "Start Bootstrap",
    links: [
      { text: "Home", href: "#", label: "Navigate to Home" },
      { text: "About", href: "#", label: "Navigate to About" },
      { text: "Service", href: "#", label: "Navigate to Services" },
      { text: "Contact", href: "#", label: "Navigate to Contact" },
    ],
  };

// Definimos los datos para el jumbotron
export const jumbotronData = {
    title: "¡Bienvenido a mi sitio web!",
    leadText: "Este es un simple jumbotron para llamar la atención sobre contenido importante.",
    additionalText: "Puedes utilizar este espacio para destacar información adicional.",
    buttonText: "Call to action!",
    buttonLink: "https://example.com"
};

// Definimos los datos para la card
export const cardData = [
  { id: 1, 
    title: "Card title", 
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    imageUrl: "https://images.pexels.com/photos/13484961/pexels-photo-13484961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
  },
  { id: 2, 
    title: "Card title", 
    text: "Optio sapiente dolorum, laudantium veritatis magni dolore facilis odio voluptate laborum adipisci nobis fugit, corporis quis.", 
    imageUrl: "https://images.pexels.com/photos/28951415/pexels-photo-28951415/free-photo-of-vinilo-vintage-y-camara-retro-con-confeti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 3, 
    title: "Card title", 
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
    imageUrl: "https://images.pexels.com/photos/27796242/pexels-photo-27796242/free-photo-of-calle-arquitectura-en-pie-de-pie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, 
    title: "Card title",
    text: "Some quick example text.", 
    imageUrl: "https://images.pexels.com/photos/28637782/pexels-photo-28637782.jpeg" }
];

// Definimos los datos para el footer
export const footerData = {
  brandName: "Start Bootstrap",
  currentYear: new Date().getFullYear().toString(),
  companyName: "Neptali-Ricardo",
  companyLink: "https://github.com/Neptali-Ricardo",
  reservedMessage: "All rights reserved.",
  links: [
    { text: "Home", href: "#", label: "Navigate to Home" },
    { text: "About", href: "#", label: "Navigate to About" },
    { text: "Services", href: "#", label: "Navigate to Services" },
    { text: "Contact", href: "#", label: "Navigate to Contact" }
  ]
};
