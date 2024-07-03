# Questions and Answers about Variables and Operators

## Question 1: What's a variable?

**Answer:** A variable is a container for a value, which can be of various types.

---

## Question 2: What's a constant?

**Answer:** A constant is a container for a value, which can be of various types, but once set, it cannot be changed.

---

## Question 3: In the following code, what is the variable and what is the data of the variable?
```javascript
let userAge = 30;
```
**Answer:** The variable is userAge and the data of the variable is 30.

---

## Question 4 : Could you replace this snippet ? 
```javascript
                 let age = 30;
                 alert(age);

             with this one

                 alert(30);

```
**Answer:** Yes. age is a variable that stores 30 as a value. Whenever you refer to the variable, you could also directly use the value (without storing it in a variable) first.

---
## Question 5 : Why do we need variables if
```javascript
                 let age = 30;
                 alert(age);

             can be re-written as ?

                 alert(30);

             
```
             
**Answer:** Variables are used to store values that can be used later in the code. They are used to store values that can be used multiple times in the code. They are also used to store values that can be changed later in the code. They are used to store values that are calculated based on other values

---

## Question 6 : Which kind of operator is the = operator?

**Answer:** The = operator is an assignment operator.

---
# Questions and Answers about Variables and Operators

## Question 1 : Where do "data types" come into play ?

**Answer:** Data you work with in your code is of different type -e.g. numbers,text etc... 

---
## Question 2 : Which of the followwing statements correctly creates a number and stores it in a constant ?
```javascript 
const userAge = '30';
```
```javascript 
const userAge = let 30;
```
```javascript 
const userAge = 30;
```

**Answer:** This is correct : 
```javascript 
const userAge = 30;
```
---
## Question 3 : Is 30 the same as '30' ? 

**Answer:** No.

---

## Question 4 : Which of the following snippets will NOT yield an error ?

```javascript 
let myOtherName;
const myName = 'Max';
myName='Max';
alert(myName);
```
```javascript 
let myOtherName;
const myName = 'Max';
myOtherName='Max';
alert(myName);
```
```javascript 
let myOtherName;
const myName = 'Max';
myName=30;
alert(myName);
```

**Answer:** This is correct : 
```javascript 
let myOtherName;
const myName = 'Max';
myOtherName='Max';
alert(myName);
```

## Question 5 : Givent that JavaScript is a weakly typed, dynamic language, would you expect that this code works ? 
```javascript 
let myName = 'Max';
myName = 30;
```
**Answer:** This code snippet will work. Variables in JavaScript are NOT tied to data types. 