import { $Enums } from "@prisma/client";
import { hashSync } from "bcrypt";

export const user = [
  {
    fullName: "User Test",
    email: "user@test.ru",
    password: hashSync("123", 10),
    verified: new Date(),
    role: $Enums.UserRole.USER,
  },
  {
    fullName: "Admin Admin",
    email: "admin@test.ru",
    password: hashSync("123", 10),
    verified: new Date(),
    role: $Enums.UserRole.ADMIN,
  },
];

export const categories = [
  { name: "Мототехника" },
  { name: "Легковые авто" },
  { name: "Грузовики" },
  { name: "Спецткхника" },
  { name: "Водная техника" },
];

export const states = [{ name: "Все" }, { name: "Новый" }, { name: "Б/У" }];

export const brands = [
  { name: "Alfa Romeo" },
  { name: "Audi" },
  { name: "Bentley" },
  { name: "BMW" },
  { name: "Chevrolet" },
  { name: "Chrysler" },
  { name: "Citroen" },
  { name: "Daewoo" },
  { name: "Fiat" },
  { name: "Ford" },
  { name: "Honda" },
  { name: "Hyundai" },
  { name: "Infiniti" },
  { name: "Jaguar" },
  { name: "Jeep" },
  { name: "Kia" },
  { name: "Lada" },
  { name: "Land Rover" },
  { name: "Lexus" },
  { name: "Mazda" },
  { name: "Mercedes Benz" },
  { name: "Mitsubishi" },
  { name: "Nissan" },
  { name: "Opel" },
  { name: "Peugeot" },
  { name: "Porsche" },
  { name: "Renault" },
  { name: "Saab" },
  { name: "Seat" },
  { name: "Skoda" },
  { name: "Sang Yong" },
  { name: "Subaru" },
  { name: "Suzuki" },
  { name: "Toyota" },
  { name: "Volkswagen" },
  { name: "Volvo" },
];

export const manufacturer = [
  {
    name: "Brembo",
    price: 186,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyTQi3wmVB-pmfcmo6jLaohIMUBAxVnjbmw&s",
  },
  {
    name: "Contitech",
    price: 122,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHSKcZskI8owqqm-KIeavTq5a85cUBXpB5Q&s",
  },
  {
    name: "Dayco",
    price: 186,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFtYTM7avSx8X2XOOANoR_JiR2lFAdY07Cw&s",
  },
  {
    name: "Goodyer",
    price: 156,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJwHdDR-B1P2If84nIJQ13nmxeHIHyMqheA&s",
  },
  {
    name: "Hepu",
    price: 146,
    imageUrl:
      "https://photos.autorus.ru/upload/f7/d1/20/f7d120a4-8972-4ee9-a1bb-79884b8c48d1.png",
  },
  {
    name: "Luk",
    price: 167,
    imageUrl:
      "https://photos.autorus.ru/upload/41/c6/16/41c61608-7980-4c0f-a57d-0ae88f2c46a6.jpeg",
  },
  {
    name: "Glaser",
    price: 190,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mgvdf-mHTVq32dIwmeNumdr-vV7qdq2_1A&s",
  },
  {
    name: "Valeo",
    price: 134,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwKu0Gyl9D-ij1wFNqNSUqY0j_AmKPWBRsQ&s",
  },
  {
    name: "Topran",
    price: 166,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaVsZpN-c7AdMQbxUbLB5SSkeHoWM0avWIw&s",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const product = [
  {
    name: "Двигатель",
    categoryId: 1,
    stateId: 1,
    brandId: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/Alfa_Romeo.svg/2048px-Alfa_Romeo.svg.png",
  },
  {
    name: "Сцепление",
    categoryId: 1,
    stateId: 1,
    brandId: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/Alfa_Romeo.svg/2048px-Alfa_Romeo.svg.png",
  },
  {
    name: "Трансмиссия",
    categoryId: 1,
    stateId: 1,
    brandId: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/Alfa_Romeo.svg/2048px-Alfa_Romeo.svg.png",
  },
  {
    name: "Подвеска",
    categoryId: 1,
    stateId: 1,
    brandId: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/Alfa_Romeo.svg/2048px-Alfa_Romeo.svg.png",
  },
  {
    name: "Колеса",
    categoryId: 1,
    stateId: 1,
    brandId: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/Alfa_Romeo.svg/2048px-Alfa_Romeo.svg.png",
  },
  {
    name: "Кузов",
    categoryId: 1,
    stateId: 1,
    brandId: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/Alfa_Romeo.svg/2048px-Alfa_Romeo.svg.png",
  },
  {
    name: "Электрика",
    categoryId: 1,
    stateId: 1,
    brandId: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/Alfa_Romeo.svg/2048px-Alfa_Romeo.svg.png",
  },
];
