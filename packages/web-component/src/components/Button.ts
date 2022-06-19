import { html } from "lit";
import {  customElement, property } from "lit/decorators.js";
import { TwLitElement } from "../common/TwLitElement";

@customElement("x-button")
export class Button extends TwLitElement {
  /**
   * 是否为主要按钮
   */
  @property({type: Boolean})
  primary: boolean

  /**
   * 按钮文字
   */
  @property({
  })
  label: string

  render() {
    return html`<div 
    class="btn ${this.primary ? "btn__primary" : null}"
    >${this.label || "按钮"}</div> `;
  }
}
