import { html } from "lit";
import {  customElement, property } from "lit/decorators.js";
import { TwLitElement } from "../common/TwLitElement";

@customElement("x-button")
export class Button extends TwLitElement {
  @property({type: Boolean})
  primary: boolean

  @property()
  label: string

  onClick() {
    console.log("您点击了按钮")
  }

  render() {
    return html`<div 
    class="btn ${this.primary ? "btn__primary" : null}"
    @click="${this.onClick}"
    >${this.label || "按钮"}</div> `;
  }
}
