import React from "react";
import Header from "../Header/Header";

const Blog = () => {
  return (
    <div>
      <Header />

      <p>
        1.Tell us the differences between uncontrolled and controlled
        components. <br />
        <b>Ans:</b>The main differences between controlled and uncontrolled
        components are:
        <ul>
          <li>
            In controlled components, the component's state is the single source
            of truth for the value of the form element, while in uncontrolled
            components, the DOM is the source of truth.
          </li>
          <li>
            In controlled components, any changes to the form element's value
            trigger a change in state, while in uncontrolled components, changes
            to the form element's value must be retrieved using a ref.
          </li>
          <li>
            Controlled components allow for more granular control over the
            behavior of the form element, while uncontrolled components are
            simpler to implement.
          </li>
        </ul>
      </p>

      <p>
        2.How to validate React props using PropTypes <br />
        <b>Ans:</b>Add a propTypes property to a component and set it equal to
        an object with keys for each prop want to validate. The values of these
        keys should be the corresponding PropTypes validators
      </p>

      <p>
        3.Tell us the difference between nodejs and express js. <br />
        <b>Ans:</b>Node.js and Express.js are complementary technologies that
        are often used together to build modern web applications. While Node.js
        provides the basic tools for building web applications, Express.js
        provides a set of features that simplify the process of building web
        applications, making it faster and easier to get up and running with a
        web application.
      </p>

      <p>
        4.What is a custom hook, and why will you create a custom hook? <br />
        <b>Ans:</b>custom hook is a function that allows you to encapsulate
        reusable logic that can be shared across multiple components. Custom
        hooks allow you to abstract away complex logic and make your code more
        modular and reusable. For example, you might create a custom hook that
        fetches data from an API and handles loading and error states. This
        custom hook can then be used in multiple components that need to fetch
        data from the same API, without repeating the same logic in each
        component. Overall, custom hooks are a powerful tool that can help make
        your code more modular, reusable, and easier to maintain.
      </p>
    </div>
  );
};

export default Blog;
