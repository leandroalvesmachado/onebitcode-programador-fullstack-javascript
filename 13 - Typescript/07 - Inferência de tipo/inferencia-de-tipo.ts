const spaceship = {
    name: 'X-Wing',
    speed: 0
}

// typescript ja sabe o tipo (InferĂȘncia de tipo)
// const spaceship: {
//     name: string;
//     speed: number;
// }

// typescript ja sabe o tipo (InferĂȘncia de tipo)
// function accelerate(spaceship: any, speed: any): void
function accelerate(spaceship, speed) {
}

accelerate(spaceship, 50)