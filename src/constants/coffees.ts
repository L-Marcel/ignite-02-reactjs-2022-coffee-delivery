export const coffees = {
  "Americano": {
    src: "/assets/coffee/Americano.png",
    price: 9.90,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["Tradicional"]
  },
  "Árabe": {
    src: "/assets/coffee/Árabe.png",
    price: 10,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["Especial"]
  },
  "Café Com Leite": {
    src: "/assets/coffee/Café Com Leite.png",
    price: 10.10,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["Tradicional", "Com leite"]
  },
  "Café Gelado": {
    src: "/assets/coffee/Café Gelado.png",
    price: 8,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["Tradicional", "Gelado"]
  },
  "Capuccino": {
    src: "/assets/coffee/Capuccino.png",
    price: 15,
    title: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["Tradicional", "Com leite"]
  },
  "Chocolate Quente": {
    src: "/assets/coffee/Chocolate Quente.png",
    price: 10.80,
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["Especial", "Com leite"]
  },
  "Cubano": {
    src: "/assets/coffee/Cubano.png",
    price: 10,
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["Especial", "Alcoólico", "Gelado"]
  },
  "Expresso Cremoso": {
    src: "/assets/coffee/Expresso Cremoso.png",
    price: 13,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["Tradicional"]
  },
  "Expresso": {
    src: "/assets/coffee/Expresso.png",
    price: 10,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["Tradicional"]
  },
  "Havaiano": {
    src: "/assets/coffee/Havaiano.png",
    price: 14,
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["Especial"]
  },
  "Irlandês": {
    src: "/assets/coffee/Irlandês.png",
    price: 18,
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["Especial", "Alcoólico"]
  },
  "Latte": {
    src: "/assets/coffee/Latte.png",
    price: 15,
    title: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["Tradicional", "Com leite"]
  },
  "Macchiato": {
    src: "/assets/coffee/Macchiato.png",
    price: 13,
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["Tradicional", "Com leite"]
  },
  "Mocaccino": {
    src: "/assets/coffee/Mocaccino.png",
    price: 15,
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["Tradicional", "Com leite"]
  }
};

export type Coffee = keyof typeof coffees;