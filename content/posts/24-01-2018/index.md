---
title: "Using WOW.js with Next.js"
cover: "/headers/wow-n-next.jpg"
category: "development"
date: "24/01/2018"
tags:
    - dev
    - next.js
    - animations
---
## _Or any library that uses the 'window' object, for that matter._  

Do you know about [WOW.js](http://mynameismatthieu.com/WOW/)? It’s an awesome library made by __Matt Dellac__ which serves the purpose of animating things on scroll _(most common use-case: you scroll down a page - and some component fades in or moves into screen)_.  
  
It’s super simple to use: import the library, add class names to the markup you want to animate, and initialize WOW in your javascript code!.  

**Problem is...** it's just not as simple when you’re doing server-side rendering with Next.js. The reason being: WOW.js uses the ‘window’ object of your browser to work, and there is no ‘window’ object on the first render of your page! ... because it’s being done in the server! 
  
So this is how I got it working:  
  
### 1. Install 'wow.js' via npm  
```
    > npm add wow.js
```  
  
  ---  
  

### 2. Import animate.css in the Head component of your _document.js or Layout HOC.

```jsx
    import Head from 'next/head'

    ...

    // Inside your render()
    <Head>
        <title>My Proyect</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
    </Head>
```
  
  ---  
  

### 3. Execute it, and animate it!

Basically, we need WOW.js to only execute on the client side. 
We can initialize it on a HOC (__not__ `_document.js`) or the component which contains the animated markup.

```jsx
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null


export default class MyComponent extends React.Component {
    componentDidMount() {
        new WOW().init()
    }
    render() {
        return (
            <h2 className={"wow fadeInUp"}>I'm animated!</h2>
            )
    }
}
```

Cool, huh?