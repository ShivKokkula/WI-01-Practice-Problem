const coin_head = 1;
const coin_tail = 0;

let random_flip = Math.floor(Math.random() * 10) % 2;

if (random_flip === coin_head) {
    console.log("Head");
} else {
    console.log("Tail");
}