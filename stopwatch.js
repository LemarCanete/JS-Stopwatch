class Stopwatch{
    constructor(countDisplay){
        this.countDisplay = countDisplay;
        this.clear();
    }

    clear(){
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;

        this.interval = null
    }

    start(){
        window.setInterval(() => {
            this.count();
        }, 100);
    }

    count(){
       this.seconds++;
        if(this.seconds / 60 === 1){
            this.seconds = 0;;
            this.minutes++;

            if(this.minutes / 60 === 1){
                this.minutes = 0;
                this.hours++;
            }
        }
    }
   

    displayCount(){
        this.countDisplay.innerText = `${this.hours} : ${this.minutes} : ${this.seconds}`;
    }
}
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
const countDisplay = document.querySelector("[data-count]");

const stopwatch = new Stopwatch(countDisplay);

startButton.addEventListener("click", ()=>{
    stopwatch.count();
    stopwatch.start()
    stopwatch.displayCount();
})
