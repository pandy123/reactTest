import { Main } from "./application/ui/Main"
import * as ReactDOM from "react-dom";
import * as React from "react";


export function startup(jconfig: any) {
   var root = document.createElement("div");
   ReactDOM.render(<Main />, root);
   document.body.appendChild(root);
}