function sum(a,b){
    return a+b;
}

import AppRoot from "../app/components/AppRoot.jsx";

import React from "react/addons";

var TestUtils = React.addons.TestUtils;

describe("sum function ", ()=>{
    it("should return sum of two numbers", ()=>{
        let c =sum(3,4);        
        
        expect(c).toBe(7);
        
    });
    it("should throw error when one of the arguments is a string/object",()=>{
        expect(sum("22", 5)).toThrow();
        
    });
});