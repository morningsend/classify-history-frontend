import React from 'react';

import ReactDOM from 'react-dom';

import TestUtils from 'react-addons-test-utils';

describe("Div element", ()=>{
   it("non empty should contain some text when rendered", ()=>{
       const div = TestUtils.renderIntoDocument(<div>Hello</div>);
       
       const divNode = ReactDOM.findDOMNode(div);
       
       expect(divNode).not.toBe(null);
       expect(divNode.textContent).toEqual('Hello');
       
   }); 
    
});