let testimonial_data = [
    {
        name:"Sivakarthikeyan",
        image:"./siva.jpeg",
        text_content: "Sivakarthikeyan is a popular Indian actor, known for his work in Tamil cinema. He gained fame for his versatility, transitioning from television hosting to acting in films. His notable movies include Remo, Varuthapadatha Valibar Sangam, and Doctor, where he showcases his comic timing and charismatic screen presence."
    },
    {
        name:"Vijay",
        image:"./vijay.jpeg",
        text_content: "Vijay, often referred to as thalapathy, is a leading Tamil film actor, known for his mass appeal and strong fan base. He has starred in numerous successful films, including Ghilli, Mersal, and Master, earning a reputation for his action-packed roles and charismatic performances."

    },
    {
        name:"Dhanush",
        image:"./Dhanush.jpeg",
        text_content: "Dhanush is an Indian actor, producer, and singer, primarily known for his work in Tamil cinema. He gained widespread recognition for his roles in films like Aadukalam and Raanjhanaa. Dhanush has also won several prestigious awards, including National Film Awards for his performances."
    }
]

let data = 0

let name = document.querySelector(".container_name")
let image = document.querySelector(".container_image")
let text_content = document.querySelector(".container_content")

function testimonial() {
    let current = testimonial_data[data]
    name.innerHTML = current.name
    image.src = current.image
    text_content.innerHTML = current.text_content
    data++

    if(data===testimonial_data.length){
        data = 0
    }
}

setInterval(() => {
    testimonial()},1000);

    testimonial()