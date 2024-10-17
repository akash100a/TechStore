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
            "id": 6,
            "title": "Calvin Klein CK One",
            "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
            "category": "fragrances",
            "price": 49.99,
            "discountPercentage": 0.32,
            "rating": 4.85,
            "stock": 17,
            "tags": [
                "fragrances",
                "perfumes"
            ],
            "brand": "Calvin Klein",
            "sku": "DZM2JQZE",
            "weight": 5,
            "dimensions": {
                "width": 11.53,
                "height": 14.44,
                "depth": 6.81
            },
            "warrantyInformation": "5 year warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Great value for money!",
                    "date": "2024-05-23T08:56:21.619Z",
                    "reviewerName": "Sophia Brown",
                    "reviewerEmail": "sophia.brown@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Very disappointed!",
                    "date": "2024-05-23T08:56:21.619Z",
                    "reviewerName": "Madison Collins",
                    "reviewerEmail": "madison.collins@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Poor quality!",
                    "date": "2024-05-23T08:56:21.619Z",
                    "reviewerName": "Maya Reed",
                    "reviewerEmail": "maya.reed@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 20,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.619Z",
                "updatedAt": "2024-05-23T08:56:21.619Z",
                "barcode": "2210136215089",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
                "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
                "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
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


