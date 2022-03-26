import React from 'react';
import './Paragraph.css'

const Paragraph = () => {
    return (
        <div className='paragraph'>
            <div className='react-work'>
                <h1>How does react work?</h1>
                <p>React is one of the most popular javascript library. Before explaning the working principle of react,at first want to know what is react? React is javascript library(not a framework) that create user interface(UIs) in a predictable and effiecient way using declarative code. That means react is a declaration. One of the biggest advantage that you can infuse HTML code with javascript. User can create a representation of DOM node by declaring the element function in react. React uses className.JSX tags have name,children and attribute. React is using JSX instead of standard javascript to simplicity components and keep code clean.</p>
            </div>
            <div className='state-props'>
                <h1>Write down props vs state.</h1>
                <h4>props:</h4>
                <li> props are unmutable.</li>
                <li>You can pass properties from present components.</li>
                <li>its can't be modified.</li>
                <li>props are read only.</li>
                <li>props are passed outside a components</li>
                <h4>state:</h4>
                <li>state are unmutable.</li>
                <li>You can define states in the components itself.</li>
                <li>states can be change by asynchronous.</li>
                <li>state are pass inside a components.</li>
            </div>
            <div className='use-state'>
                <h1>How does useState work?</h1>
                <p>useState is one kind of hook.this hook is unmutable. You can define useState in the component it self. state can be modified . It's pass data inside. After create a functional component and through some react hook at it that tracks state, can also update it and it just works.</p>
            </div>
        </div>
    );
};

export default Paragraph;