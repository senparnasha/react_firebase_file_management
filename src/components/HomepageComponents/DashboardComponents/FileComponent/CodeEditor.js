import { useState } from "react";
import React from 'react'
import "./CodeEditor.css"


const CodeEditor = () => {

const [data, setData]= useState(`\n`);

const codes={
    html: "xml",
    php: "php",
    js: "javascript",
    jsx: "js",
    txt: "textile",
    xml: "xml",
    css: "css",
    c: "clike",
    cpp: "clike",
    java: "java",
    cs: "clike",
    py: "python",
    json: "javascript",
}


  return (
    <div>CodeEditor</div>
  )
}

export default CodeEditor