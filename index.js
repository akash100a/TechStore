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
            "title": `MSI MPG 491CQP QD-OLED 49"DQHD 144Hz Curved Gaming Monitor`,
            "description": `MSI MPG 491CQP QD-OLED 49" DQHD 144Hz Curved Monitor
The MSI MPG 491CQP QD-OLED is a top-tier gaming monitor designed to deliver an immersive and high-performance gaming experience. Featuring a 49-inch QD-OLED panel with DQHD (5120 x 1440) resolution and 1800R curvature, it provides stunning clarity and a panoramic view that wraps around your field of vision. The 144Hz refresh rate and 0.3ms response time ensure ultra-smooth and responsive gameplay, while the 1,500,000:1 contrast ratio and VESA DisplayHDR True Black 400 certification offer deep blacks and vibrant colors. With multiple connectivity options, including HDMI, DisplayPort, and USB-C with 90W power delivery, and an ergonomic stand with tilt, swivel, and height adjustments, this monitor is designed for both performance and comfort. The MSI MPG 491CQP QD-OLED is the ultimate choice for gamers seeking the best in visual quality and gaming performance.`,
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
                "https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/mpg-491cqp-qd-oled-06-500x500.webp",
                "https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/491cqp-02-500x500.webp",
                "https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/mpg-491cqp-qd-oled-07-500x500.webp",
                "https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/491cqp-05-500x500.webp"
            ],
            "thumbnail": "https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/mpg-491cqp-qd-oled-06-500x500.webp"
        },
    
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


