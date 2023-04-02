import cardImg1 from "./Components/cardimg1.svg"
import cardimg2 from "./Components/cardimg2.svg"
import cardimg3 from "./Components/mountain-bike.png"
export default [
    {
        id : 1,
        img : `${cardImg1}`,
        title : "Life lessons with Katie Zaferes",
        country : "USA",
        price: 136,
        stats:{
            rating : "5.0",
            reviewCount : 6
        },
        onSpot:"SOLD OUT"
    },
    {
        id : 2,
        img : `${cardimg2}`,
        title : "Learn wedding photography",
        country : "USA",
        price: 126,
        stats:{
            rating : "5.0",
            reviewCount : 30
        },
        onSpot:"ONLINE"
    },
    {
        id : 3,
        img : `${cardimg3}`,
        title : "Group Mountain Biking",
        country : "USA",
        price: 50,
        stats:{
            rating : "4.8",
            reviewCount : 2
        },
        onSpot:"SOLD OUT"
    },
    
]