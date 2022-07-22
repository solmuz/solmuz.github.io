const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const gravity = .4
canvas.width = 1100
canvas.height= 600


class Sprite {
    constructor({pos, vel}) {
        this.pos = pos
        this.vel = vel
        this.height = 120
    }

    square(){
        c.fillStyle = '#FEFFD1'
        c.fillRect(this.pos.x, this.pos.y, 50, 110)
        
    }

    update(){
        this.square()
        this.pos.x += this.vel.x    
        this.pos.y += this.vel.y

        if (this.pos.y + this.height + this.vel.y >= canvas.height){
            this.vel.y=0    
        } else this.vel.y+= gravity
    }
}

const p1 = new Sprite({
    pos:{
        x: 40,
        y: 275
    },
    vel: {
        x:0,
        y:5
    }
})

const p2 = new Sprite({
    pos:{
        x: 1000,
        y: 275
    },
    vel: {
        x:0,
        y:5
    },  
})

console.log(p1)

const keys = {
    d:{
        pressed:false
    },
    a:{
        pressed:false
    },
}

function action(){
    window.requestAnimationFrame(action)
    c.fillStyle = '#2F2F2F'
    c.fillRect(0, 0, canvas.width,canvas.height)
    p1.update()
    p2.update()

    p1.vel.x=0
    if (keys.a.pressed){
        p1.vel.x=-5
    }else if(keys.d.pressed){
        p1.vel.x=5
    }
}
action()

window.addEventListener('keydown',(event)=>{
    switch (event.key){
        case 'a':
            keys.a.pressed=true
            break
        case 'd':
            keys.d.pressed=true
            break
        case 'w':
            p1.vel.y=-10
            break
    }
    console.log(event.key)
})

window.addEventListener('keyup',(event)=>{
    switch (event.key){
        case 'a':
            keys.a.pressed=false
            break
        case 'd':
            keys.d.pressed=false
            break
    }
    console.log(event.key)
})