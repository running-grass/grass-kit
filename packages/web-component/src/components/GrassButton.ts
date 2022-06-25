import { html } from "lit";
import {  customElement, property } from "lit/decorators.js";
import { TwLitElement } from "../common/TwLitElement";

@customElement("grass-button")
export class GrassButton extends TwLitElement {
  /**
   * 是否为主要按钮
   */
  @property({type: Boolean})
  primary: boolean = false

  /**
   * 按钮文字
   */
  @property({type: String})
  label: string = "Button"

  render() {
    return html`<div 
    class="btn ${this.primary ? "btn__primary" : null}"
    >${this.label || "按钮"}</div> `;
  }
}
