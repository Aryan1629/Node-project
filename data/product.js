// user name of our cloudd database is freshfruit
// possword Aryan1628
class Products{    // blue of object of products
    constructor(name,img,price,instock,des){
        this.name=name;
        this.img=img;
        this.price=price;
        this.instock=instock;
        this.des=des;
    }
}
const products=[
    new Products(
        
        "Apple",
       "/images/apple.jpeg",
        "100/kg",
        12,
        "Apples are one of the most popular fruits — and for good reason. They're an exceptionally healthy fruit with many research-backed benefits"
        ),
    new Products(
        
        "Banana",
        "/images/banana.jpeg",
        "40/dozen",
        10,
        "Bananas contain fiber, potassium, folate, and antioxidants, such as vitamin C. All of these support heart health. A 2017 review found that people who follow a high fiber diet have a lower risk of cardiovascular disease than those on a low fiber diet."
    ),
    new Products(
        
        "Govava",
        "/images/govava.jpeg",
       "50/hg",
       8,
        "One guava makes up one of the 4-5 recommended servings of fruit per day. Like many fruits, guava has a significant amount of sugar in it, and it's important to moderate your sugar intake. Too much sugar in your diet can lead to problems, including weight gain and tooth decay."
    ),
    new Products(
        
        "Grapes",
        "/images/grapes.jpeg",
        "75/kg",
        18,
        "Grapes are a good source  mineral that helps balance fluids in your body. Potassium can help bring down high blood pressure and lower your risk of heart disease and stroke. Most people don't get enough of this nutrient, so eating grapes can help fill the gap."
    ),
    new Products(
        
        "Black-Berry",
        "/images/jamun.jpeg",
        "40/kg",
        5,
        "Jamun is a delicious low-calorie fruit that is loaded with vitamin C and minerals like iron, calcium, phosphorus, magnesium and folic acid. This fruit packs a punch as it has a high antioxidant content, contains diuretic, and has antibacterial and antiscorbutic properties"
    ),
    new Products(
        
        "Kivi",
        "/images/kivi.jpeg",
        "100/dozen",
        12,
        "Kiwis are high in Vitamin C and dietary fiber and provide a variety of health benefits. This tart fruit can support heart health, digestive health, and immunity. The kiwi is a healthy choice of fruit and is rich with vitamins and antioxidants."
    ),
    new Products(
    
        "Lichi",
        "/images/lichi.jpeg",
        "70/kg",
        8,
        "Rich in potassium, litchi helps to control the blood pressure. Potassium reduces compression of the arteries and blood vessels and also helps to keep your heart healthy. Litchi slows down skin ageing and blemishes. Vitamin C and antioxidant present in this fruit can give you clear and healthy skin."
    ),
    new Products(
        
        "Mangos",
        "/images/mango.jpeg",
        "40/kg",
        6,
        "Mango is a low-calorie fruit that is high in fibre, and is a great source of vitamins A and C. It also contains folate, B6, iron and a little calcium, zinc and vitamin E"
    ),
    new Products(
        
        "Oranges",
        "/images/oranges.jpeg",
        "65/kg",
        14,
        "Oranges are among the world's most popular fruits, as they're both tasty and nutritious. They are a good source of vitamin C, as well as several other vitamins, minerals, and antioxidants. For this reason, they may lower your risk of heart disease and kidney stones"
    ),
    new Products(
        
        "Papaya",
        "/images/papaya.jpeg",
        "100/kg",
        12,
        "Papayas contain high levels of antioxidants vitamin A, vitamin C, and vitamin E. Diets high in antioxidants may reduce the risk of heart disease. The antioxidants prevent the oxidation of cholesterol."
    ),
    new Products(
        
        "Pineapple",
        "/images/pineapple.jpeg",
        "59/pice",
        11,
        ` This popular fruit is packed with nutrients, antioxidants and other helpful compounds, such as enzymes that can fight inflammation and disease. Pineapple and its compounds have been linked to many health benefits, including aiding digestion, boosting immunity and speeding up recovery from surgery, among other`
    ),
    new Products(
    
        "Strawberries",
        "/images/strawberries.jpeg",
        "150/pack",
        15,
        "Packed with vitamins, fiber, and particularly high levels of antioxidants known as polyphenols, strawberries are a sodium-free, fat-free, cholesterol-free, low-calorie food. They are among the top 20 fruits in antioxidant capacity and are a good source of manganese and potassium."
    )
];
module.exports=products;
