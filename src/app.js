const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circles = [];
const circlesCount = 100;
const ctx = canvas.getContext('2d');

const circle = {
    speed : {x: (2 + Math.floor(Math.random() * 5)), y: (2 + Math.floor(Math.random() * 5))},
    position : {x: canvas.width / 2, y: canvas.height / 2},
    radius : canvas.width / 10,
    colors : ['#9C7785', '#474457', '#DFCDDD', '#E8B452', '#D6384F'],
    color : '',
    init(){
        this.color = this.colors.sort(() => 0.5 - Math.random())[0];
        this.animate();
    },
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    },
    animate(){
        if (this.position.y + this.radius > canvas.height || this.position.y - this.radius < 0) {
            this.speed.y = -this.speed.y
        }
        if (this.position.x + this.radius > canvas.width || this.position.x - this.radius < 0) {
            this.speed.x = -this.speed.x
        }
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.draw();
        window.requestAnimationFrame(()=>{
            this.animate();
        })
    }
}
circle.init();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})