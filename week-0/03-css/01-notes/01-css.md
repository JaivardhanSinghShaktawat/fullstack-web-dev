# CSS

## What is CSS ?

- CSS stands for cascading style sheets.
- It is used to make websites beautiful.
- We have property and value in CSS.
- CSS lets us add styles to our website (colors , font sizes , background colors).

## Goal of CSS

- to apply styles to the html elements.
- to position html elements on the web page.

## How to add CSS styles ?

1. inline css style : styles are applied directly on the html elements via style attribute.

```html
<h1 style="color : red ; background : green ; ">hi there</h1>
```

2. internal css style : styles are written inside the style element.
3. external css style : a new css file is created where styles are written.

## CSS Properties

1. color : it is used change text color of html elements.
2. background-color : it is used to change background color of html elements.
3. background : it is a shorthand property which can be used to add background-color , background-image , background-size , background-position etc.
4. border-radius : it is used to make rounded curve borders.
5. border : it is used to add border to html elements.

```
border : border-width border-style border-color ;
```

6. padding : it is the space between the html content and the border.

```
padding-top : to give top padding.
padding-left : to give left padding.
padding-right : to give right padding.
padding-bottom : to give bottom padding.
```

7. margin : it is the space between two or more html elements.

```
margin-top : to give top margin.
margin-left : to give left margin.
margin-right : to give right margin.
margin-bottom : to give bottom margin.
```

8. box-shadow : It is used to add shadow effects to the html elements.

```
box-shadow : shadow-x-direction shadow-y-direction blur-radius spread-radius color ;

blur-radius : how much to blur shadow.
spread-radius : how much to spread shadow.
color : color of the shadow.
shadow-x-direction : moving shadow in left or right direction.
shadow-y-direction : moving shadow in top or bottom direction.
```

9. font-size : it is used to change the font size of the text.

10. font-weight : it is used to make the fonts thicker/thinner.

11. display : it is used to change the display of different html elements.It is used to make html elements as block , inline , inline-block.

12. float property : it is used to position the html elements.The elements floats in the left or right direction.

## Flexbox

- It is a CSS technology that is used to position HTML elements.
- All the items of the flexbox are called flex items or flex child.

### Flexbox Properties

1. display : flex ; // it makes the parent html element as flexbox or flex container.

2. flex-direction : row/column ; // direction of the flexbox child.

3. justify-content : flex-start/flex-end/space-around/space-between/space-evenly ; // it is used to give horizontal space between flex items.

- flex-start : all the flex items should go in the left direction.It is the default value.
- flex-end : all the flex items should go in the right direction.
- center : all the flex items should come in the center.
- space-between : there should be equal space between all the flex items but no space in left and right direction.
- space-evenly : equal space between the flex items as well as between the borders.
- space-around : equal space between the flex items and some space in the left and right direction.

4.  align-items : center/flex-start/flex-end ; // it is used to position flex items vertically.

## Different ways of Positioning Elements

1. Floats
2. Position Property
3. Flexbox
