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
            "id": "23b849fa213d47b68f109b23",
            "title": "MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC",
            "description": "The MSI Pro 16 Flex-036AU is a versatile 15.6-inch multitouch all-in-one PC designed for productivity and entertainment. Its flexible stand and sleek design make it ideal for various uses in both home and office environments.",
            "category": "All-In-One PCs",
            "price": 699.99,
            "discountPercentage": 5,
            "rating": 4.6,
            "stock": 20,
            "tags": [
                "All-In-One",
                "Touchscreen",
                "MSI",
                "Windows 10"
            ],
            "brand": "MSI",
            "sku": "PRO16FLEX036AU",
            "weight": 8,
            "dimensions": {
                "width": 390,
                "height": 260,
                "depth": 45
            },
            "warrantyInformation": "2-year limited warranty",
            "shippingInformation": "Ships within 3-5 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Perfect for office use, very versatile!",
                    "date": "2024-08-18T11:10:00.000Z",
                    "reviewerName": "Alex Johnson",
                    "reviewerEmail": "alex.johnson@example.com"
                },
                {
                    "rating": 4,
                    "comment": "Good value for money, but could use more ports.",
                    "date": "2024-09-10T14:30:00.000Z",
                    "reviewerName": "Emma Davis",
                    "reviewerEmail": "emma.davis@example.com"
                }
            ],
            "returnPolicy": "30-day return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-10-17T12:35:00.000Z",
                "updatedAt": "2024-10-17T12:35:00.000Z",
                "barcode": "2210136217001",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "/mnt/data/image 29.jpg"
            ],
            "thumbnail": "https://akash100a.github.io/TechStore/public/images/touchpad.jpg"
        },
        {
            "id": "12f049ab489d429b92874cde",
            "title": "MSI Gaming Laptop GE66 Raider 15.6-Inch Akash",
            "description": "The MSI GE66 Raider is a powerful gaming laptop featuring a 15.6-inch display, RGB keyboard, and cutting-edge hardware for immersive gaming experiences. It’s equipped with high-end specs, making it perfect for gamers and creators alike.",
            "category": "Gaming Laptops",
            "price": 1799.99,
            "discountPercentage": 7,
            "rating": 4.8,
            "stock": 12,
            "tags": [
                "Gaming",
                "Laptop",
                "MSI",
                "RGB",
                "GE66 Raider"
            ],
            "brand": "MSI",
            "sku": "GE66RAIDER15",
            "weight": 2.5,
            "dimensions": {
                "width": 358,
                "height": 267,
                "depth": 23
            },
            "warrantyInformation": "1-year limited warranty",
            "shippingInformation": "Ships within 3-5 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Fantastic performance for gaming and content creation!",
                    "date": "2024-07-29T15:10:00.000Z",
                    "reviewerName": "Michael Lee",
                    "reviewerEmail": "michael.lee@example.com"
                },
                {
                    "rating": 4,
                    "comment": "Great laptop but a bit heavy for portable use.",
                    "date": "2024-08-05T10:45:00.000Z",
                    "reviewerName": "Sarah Martin",
                    "reviewerEmail": "sarah.martin@example.com"
                }
            ],
            "returnPolicy": "30-day return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-10-17T12:40:00.000Z",
                "updatedAt": "2024-10-17T12:40:00.000Z",
                "barcode": "2210136217002",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "/mnt/data/image 29 (2).jpg"
            ],
            "thumbnail": "https://akash100a.github.io/TechStore/public/images/pc2.jpg"
        },
        {
            "id": "12f049ab489d429b92873cde",
            "title": "MSI Gaming Laptop GE66 Raider 15.6-Inch",
            "description": "The MSI GE66 Raider is a powerful gaming laptop featuring a 15.6-inch display, RGB keyboard, and cutting-edge hardware for immersive gaming experiences. It’s equipped with high-end specs, making it perfect for gamers and creators alike.",
            "category": "Gaming Laptops",
            "price": 1799.99,
            "discountPercentage": 7,
            "rating": 4.8,
            "stock": 12,
            "tags": [
                "Gaming",
                "Laptop",
                "MSI",
                "RGB",
                "GE66 Raider"
            ],
            "brand": "MSI",
            "sku": "GE66RAIDER15",
            "weight": 2.5,
            "dimensions": {
                "width": 358,
                "height": 267,
                "depth": 23
            },
            "warrantyInformation": "1-year limited warranty",
            "shippingInformation": "Ships within 3-5 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Fantastic performance for gaming and content creation!",
                    "date": "2024-07-29T15:10:00.000Z",
                    "reviewerName": "Michael Lee",
                    "reviewerEmail": "michael.lee@example.com"
                },
                {
                    "rating": 4,
                    "comment": "Great laptop but a bit heavy for portable use.",
                    "date": "2024-08-05T10:45:00.000Z",
                    "reviewerName": "Sarah Martin",
                    "reviewerEmail": "sarah.martin@example.com"
                }
            ],
            "returnPolicy": "30-day return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-10-17T12:40:00.000Z",
                "updatedAt": "2024-10-17T12:40:00.000Z",
                "barcode": "2210136217002",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "/mnt/data/image 29 (2).jpg"
            ],
            "thumbnail": "https://akash100a.github.io/TechStore/public/images/pc2.jpg"
        },
        {
            "id": "12f049ab490d429b92873cde",
            "title": "MSI Gaming Laptop GE66 Raider 15.6-Inch Rimjim",
            "description": "The MSI GE66 Raider is a powerful gaming laptop featuring a 15.6-inch display, RGB keyboard, and cutting-edge hardware for immersive gaming experiences. It’s equipped with high-end specs, making it perfect for gamers and creators alike.",
            "category": "Gaming Laptops",
            "price": 1799.99,
            "discountPercentage": 7,
            "rating": 4.8,
            "stock": 12,
            "tags": [
                "Gaming",
                "Laptop",
                "MSI",
                "RGB",
                "GE66 Raider"
            ],
            "brand": "MSI",
            "sku": "GE66RAIDER15",
            "weight": 2.5,
            "dimensions": {
                "width": 358,
                "height": 267,
                "depth": 23
            },
            "warrantyInformation": "1-year limited warranty",
            "shippingInformation": "Ships within 3-5 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Fantastic performance for gaming and content creation!",
                    "date": "2024-07-29T15:10:00.000Z",
                    "reviewerName": "Michael Lee",
                    "reviewerEmail": "michael.lee@example.com"
                },
                {
                    "rating": 4,
                    "comment": "Great laptop but a bit heavy for portable use.",
                    "date": "2024-08-05T10:45:00.000Z",
                    "reviewerName": "Sarah Martin",
                    "reviewerEmail": "sarah.martin@example.com"
                }
            ],
            "returnPolicy": "30-day return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-10-17T12:40:00.000Z",
                "updatedAt": "2024-10-17T12:40:00.000Z",
                "barcode": "2210136217002",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "/mnt/data/image 29 (2).jpg"
            ],
            "thumbnail": "https://akash100a.github.io/TechStore/public/images/pc2.jpg"
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


