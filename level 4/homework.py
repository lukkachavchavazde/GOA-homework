from turtle import*

speed(0)

bgcolor("light blue")


penup()
left(180)
forward(760)
left(90)
forward(300)
left(90)
forward(200)
pendown()


color("gray")
begin_fill()
forward(1100)
left(90)
forward(500) #hight of tower
left(90)
forward(150)
left(90)
forward(500)
end_fill()

color("gray")
begin_fill()
penup()
right(180)
forward(500)
right(90)
forward(150)
pendown()



left(115)
forward(170)
left(489)
forward(180)


penup()
right(334)
forward(80)
pendown()

right(90)
forward(790)
left(90)
forward(415)
end_fill()

color("gray")
begin_fill()
penup()
left(180)
forward(420)
pendown()   #second tower
forward(80)
left(90)
forward(150)
left(90)
forward(495)
penup()
end_fill()

left(180)
forward(500)
pendown()
color("gray")
begin_fill()
right(30)
forward(170)
right(127)
forward(170)
right(25)
forward(82)
left(92)
end_fill()

color("black")
begin_fill()
forward(50) #starting roof
left(90)
forward(50)
right(90)
forward(50)
right(90)


forward(50)
left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)

left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)


left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)



forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)


forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)


forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)
forward(50)
end_fill()
penup()    #starting door
right(90)
forward(412)
right(90)
forward(270)
right(90)
pendown()


color("brown")
begin_fill()
forward(300) #hight of the door
left(90)
forward(200)
left(90)
forward(300)
end_fill()

right(90)
forward(320) #starting winodw
penup()
right(90)
forward(300)
pendown()
color("black")
begin_fill()
forward(120) #hight of window
left(90)
forward(50)
left(90)
forward(120)
left(90)
forward(50)    #first window
end_fill()

penup()
forward(880)
pendown()

color("black")
begin_fill()

forward(50)
left(90)
forward(120)
left(90)
forward(50)
left(90)
forward(120)
end_fill()


  


exitonclick()