jest.dontMock('../app/components/AppRoot.jsx');

var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var Root = require('../app/index'); //my root-test lives in components/__tests__/, so this is how I require in my components.


import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
const AppRoot = require( '../app/components/AppRoot.jsx');

describe('AppRoot',()=>{
    it('AppRoot test', () => {

    // // Render a checkbox with label in the document
    var AppRoot = TestUtils.renderIntoDocument(
      <AppRoot />
    );

    var AppRootNode = ReactDOM.findDOMNode(AppRoot);
    var h1 = TestUtils.findRenderedDOMComponentWithTag(
       AppRootNode, 'h1'

    );
    expect(h1.getDOMNode().textContent).toEqual("Classify History");
    // Verify that it's Off by default
    // expect(checkboxNode.textContent).toEqual('Off');
    //
    // // Simulate a click and verify that it is now On
    // TestUtils.Simulate.change(
    //   TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    // );
    // expect(checkboxNode.textContent).toEqual('On');

describe('root', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<ToolboxApp/>);
    expect(root).toExist();
  });
});
// jest.dontMock('../app/components/AppRoot.jsx');
// import React from 'react';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
// const AppRoot = require( '../app/components/AppRoot.jsx');
//
// describe('AppRoot',()=>{
//     it('AppRoot test', () => {
//
//     // // Render a checkbox with label in the document
//     var AppRoot = TestUtils.renderIntoDocument(
//       <AppRoot />
//     );
//
//     var AppRootNode = ReactDOM.findDOMNode(AppRoot);
//     var h1 = TestUtils.findRenderedDOMComponentWithTag(
//        AppRootNode, 'h1'
//
//     );
//     expect(h1.getDOMNode().textContent).toEqual("Classify History");
//     // Verify that it's Off by default
//     // expect(checkboxNode.textContent).toEqual('Off');
//     //
//     // // Simulate a click and verify that it is now On
//     // TestUtils.Simulate.change(
//     //   TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
//     // );
//     // expect(checkboxNode.textContent).toEqual('On');
//   });
// })
