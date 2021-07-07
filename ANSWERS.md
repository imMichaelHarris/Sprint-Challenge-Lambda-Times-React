1.  What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
        PropTypes are used for type checking the props that we pass into components. It's important to use for future developers or just for ourselves when debugging a problem in our code. For example using proptypes makes it easier to know why a piece of code isn't working the way we expected because it's a different data type.

2. Describe a life-cycle event in React?
        A life-cycle event in react are the functions that run at different stages of the React life-cycle. Functions like the 'constructor' method and 'render' are examples. We can use other methods such as 'componetDidMount' which will run once after the constructor method is run in the mounting phase and 'componentDidUpdate' which will run every time we change the state in that component.

3. Explain the details of a Higher Order Component?
        Higher Order Components are similar to higher order functions. They take one or multiple components as an argument and will return a brand new component. This is called currying. Using higher order components we can dynamically render different components based on a condition. Higher order components are powerful in large scale apps.

4. What are three different ways to style components in React? Explain some of the benefits of each.
        In React we can style components using regular css, pre processors like 'less' or 'sass', third party react libraries like 'bootstrap' or 'reactstrap' and we can also use styled components. The benefits of using third party libraries are that they can get us great looking responsive styles quickly but they can be hard to overwrite compared to using our own styles using css or pre processors. Styled component benefits are that it is written in javascipt and we can change the look of a component just by the props it's given.