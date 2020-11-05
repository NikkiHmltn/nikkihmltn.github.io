let items = [

    {
        id: 01,
        name: "Get Out of Jail Free Card",
        price: 250,
        image: "imgs/get-out-of-jail-card.jpeg",
        description: "A thin card made of gold and signed by the King himself. It reads 'This card may be kept until needed or sold'"
    },

    {
        id: 02,
        name: "Emerald Paperweight",
        price: 10,
        image: "imgs/green-emerald.jpeg",
        description: "A chunk of refined emerald. It sparkles in the sunlight. Pretty useless for fighting. I wouldn't recommend eating it, either. Use it as a paperweight or maybe a shop will take it."
    }
]

class Items {
    constructor(info) {
        this.id = info.id
        this.name = info.name
        this.price = info.price
        this.image = info.image
        this.description = info.description
    }
}