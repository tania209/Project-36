class Food {
  constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Images/Milk.png');
  }

  getFedTime(lastFed){
    this.lastFed=lastFed;
  }

  updateFoodStock(foodStock){
    this.foodStock=foodStock;
  }

  deductFood(){
    if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
    }
  }

  getFoodStock(){
    return this.foodStock;
  }

  display(){
    background("green");

    fill("white");
    textSize(20);
    if(lastFed>=12){
      text("Last Feed : "+ lastFed%12 + " PM", 50,60);
    }     
    else if(lastFed==0){
      text("Last Feed : 12 AM",50,60);
    }
    else{
      text("Last Feed : "+ lastFed + " AM", 50,60);
    }
    var x=70,y=100; 
    imageMode(CENTER);
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=70;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }
}
