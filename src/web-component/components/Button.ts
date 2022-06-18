import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TwLitElement } from "../common/TwLitElement";

@customElement("x-button")
export class Button extends TwLitElement {
  render() {
    return html` <button class="btn text-2xl">Hello!</button> `;
  }
}
