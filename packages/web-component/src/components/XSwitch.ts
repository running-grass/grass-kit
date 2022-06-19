import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { TwLitElement } from "../common/TwLitElement";

@customElement("x-switch")
export class XSwitch extends TwLitElement {
  /**
   * 是否默认开
   */
  @property({ type: Boolean })
  on: boolean = false


  @property({ type: Function })
  toggleHandler?: (on: boolean) => boolean

  private _defaultToggle(on: boolean) {
    return !on
  }

  onClick() {
    let newOn = this.on
    if (this.toggleHandler) {
      newOn = this.toggleHandler(this.on)
    } else {
      newOn = this._defaultToggle(this.on)
    }

    if (newOn !== this.on) {
      this.on = newOn
      this.dispatchEvent(new CustomEvent('change', {
        detail: { on: newOn },
        bubbles: true,
        composed: true
      }))

    }

  }
  render() {
    return html`<div 
    @click="${this.onClick}"
    class="switch ${this.on ? "switch__on" : "switch__off"}"
    ></div> `;
  }
}
