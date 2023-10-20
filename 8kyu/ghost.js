class Ghost {
    constructor(){
      this.colors = ["white", "yellow", "purple", "red"]
    }
    get color(){
      return this.colors[Math.floor(Math.random() * this.colors.length)]
    }
  };