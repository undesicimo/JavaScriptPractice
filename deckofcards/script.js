

const annoyer = {
    phrases:['ジョシュアはイケメン','ジョシュアは天才','ジョシュアは世界一💌','ジョシュは優しい','ジョシュはけつくさい'],
    
    pickRandom() {
        const{
            phrases
        } = this;
        const index = Math.floor(Math.random() * phrases.length);
        return phrases[index]
    },
    start(){
        this.intervalId = setInterval(()=>{
            console.log(this.pickRandom())},
            3000

        )
    },
    stop(){
        clearInterval(this.intervalId);
        console.log('要は、ジョシュは世界一。。。')
    }


}

