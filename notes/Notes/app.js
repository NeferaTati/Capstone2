class Tryangle{
    constructor(side1,side2,side3){
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3

    }
    isEquilattryangle() {
        if (this.side1 ===this.side2 && this.side1 === this.side3 && this.side2 === this.side3)
            console.log("yea im equilateral triangle")
        else{console.log("nah that aint me")}
    }
    isRightTryangle(){
        if ((this.side1 * this.side1 ===
            this.side2 * this.side2 === this.side1 + this.side3 ||
             this.side2 * this.side2 === this.side1 * this.side1 + this.side3 *this.side3 ||
             

        ))
    }
}
const atriangle = new Tryangle(10,9,10);
atriangle.isEquilattryangle();