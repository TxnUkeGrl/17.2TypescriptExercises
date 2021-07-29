//TALLEST MOUNTAIN-------------------
interface Mountain {
    name: string,
    height: number
}

const mountains: Mountain[] = [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
]

var findNameofTallestMountain = (allMountains:Mountain[]): string => {
    let result: Mountain = {name: "", height: 0};
    allMountains.forEach(function(i){
        if(i.height > result.height){
            result = i;
        }
    });
    return result.name;

    // allMountains.forEach(i => {
    //     if(i.height > result.height){
    //         result = i;
    //     }        
    // })
};

var tallestMountain = findNameofTallestMountain(mountains);
console.log(tallestMountain);

//PRODUCTS--------------------------------------
interface Product{
    name: string,
    price: number
}

const products:Product[] = [
    { name: "Ray's Chips", price: 1 },
    { name: "Baja Blast", price: 2 },
    { name: "Gummi Worms", price: 1.75 },
    { name: "Hotdog", price: 2 },
    { name: "Snickers", price: 1.59 },
    { name: "Take 5", price: 1.25 },
    { name: "Pop Tarts", price: 2 },
    { name: "Potato Chips", price: 2 },
    { name: "Chips", price: 2 },
];

var calcAverageProductPrice = (productObjects: Product[]): number => {
    let result = 0;
    let average = 0;
    productObjects.forEach((i) => {
result += i.price;
average = result / productObjects.length;
    });
    return average;
};

var productAverage = calcAverageProductPrice(products);
console.log(productAverage);

//INVENTORY
interface InventoryItem{
    product: Product,
    quantity: number
}

const inventory:InventoryItem[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
];

var calcInventoryValue = (fullInventory:InventoryItem[]): number => {
    let total = 0;
    fullInventory.forEach(function(i){
        total += i.product.price * i.quantity;
    })
    return total;
};

var inventoryTotal = calcInventoryValue(inventory);
console.log(inventoryTotal);