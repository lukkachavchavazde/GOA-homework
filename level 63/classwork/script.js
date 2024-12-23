const gamer = {
    name: "გიორგი",
    age: 25,
    interests: ["ვიდეო თამაშები", "სპორტული თამაშები", "ტექნოლოგია"],
    gamingSetup: {
      console: "PlayStation 5",
      headset: "SteelSeries Arctis 7",
      controller: "DualSense",
    },
    play: function(game) {
      console.log(`${this.name} თამაშობს ${game} -ზე!`);
    }
  };
  
  gamer.play("FIFA 24");
  