const express = require('express');
const appServeer = express();
let cors = require('cors');
const path = require('path');
appServeer.use(cors());
appServeer.use(express.static(path.join(__dirname, 'public')));
appServeer.use(express.urlencoded({ extended: true }));
appServeer.set("view engine", "ejs");


let userDetails = {
    "products": [
        {
            "id": "78c977fa587c412cbd573561",
            "title": "MSI MPG GUNGNIR 110R Mid-Tower ARGB PC Case",
            "description": "The MSI MPG GUNGNIR 110R is a high-performance mid-tower PC case that combines stunning ARGB lighting with a tempered glass side panel, offering excellent airflow, space for up to 6 fans, and support for radiators up to 360mm. It's designed for gamers and PC builders looking for style and functionality.",
            "category": "PC Cases",
            "price": 129.99,
            "discountPercentage": 10,
            "rating": 4.7,
            "stock": 35,
            "tags": [
                "PC case",
                "ARGB",
                "MSI",
                "Gaming",
                "Tempered glass"
            ],
            "brand": "MSI",
            "sku": "MPG110R-GUN",
            "weight": 6.5,
            "dimensions": {
                "width": 215,
                "height": 450,
                "depth": 430
            },
            "warrantyInformation": "2-year limited warranty",
            "shippingInformation": "Ships within 3-5 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Amazing airflow and the RGB looks great in my setup!",
                    "date": "2024-08-12T08:56:21.619Z",
                    "reviewerName": "John Doe",
                    "reviewerEmail": "john.doe@example.com"
                },
                {
                    "rating": 4,
                    "comment": "Great case, but it could use more USB ports.",
                    "date": "2024-07-20T11:22:00.000Z",
                    "reviewerName": "Jane Smith",
                    "reviewerEmail": "jane.smith@example.com"
                }
            ],
            "returnPolicy": "30-day return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-10-17T10:56:21.619Z",
                "updatedAt": "2024-10-17T10:56:21.619Z",
                "barcode": "2210136215090",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://akash100a.github.io/TechStore/public/images/pc.jpg",
                "https://cdn.msi.com/products/pc-case/gungnir-110r/image-1.png",
                "https://cdn.msi.com/products/pc-case/gungnir-110r/image-2.png"
            ],
            "thumbnail": "https://akash100a.github.io/TechStore/public/images/pc.jpg"
        },        
        {
            "id": 7,
            "title": "Chanel Coco Noir Eau De",
            "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
            "category": "fragrances",
            "price": 129.99,
            "discountPercentage": 18.64,
            "rating": 2.76,
            "stock": 41,
            "tags": [
                "fragrances",
                "perfumes"
            ],
            "brand": "Chanel",
            "sku": "K71HBCGS",
            "weight": 4,
            "dimensions": {
                "width": 21.27,
                "height": 28,
                "depth": 11.89
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 1,
                    "comment": "Disappointing product!",
                    "date": "2024-05-23T08:56:21.619Z",
                    "reviewerName": "Lincoln Kelly",
                    "reviewerEmail": "lincoln.kelly@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.619Z",
                    "reviewerName": "Lincoln Kelly",
                    "reviewerEmail": "lincoln.kelly@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Excellent quality!",
                    "date": "2024-05-23T08:56:21.619Z",
                    "reviewerName": "Lucas Allen",
                    "reviewerEmail": "lucas.allen@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 5,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.619Z",
                "updatedAt": "2024-05-23T08:56:21.619Z",
                "barcode": "1435582999795",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
                "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
                "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
        }
    ],
    "total": 194,
    "skip": 0,
    "limit": 30
}


appServeer.get('/', (req, res) => {
    res.send("AKASH");
})
appServeer.get('/akash/api/products', async (req, res) => {
    res.json({
        data: userDetails,
        error: null,
    })
})

appServeer.listen(4000, () => {
    console.log("server is working");

})


