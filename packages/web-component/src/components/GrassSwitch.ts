import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TwLitElement } from "../common/TwLitElement";

@customElement("grass-switch")
export class GrassSwitch extends TwLitElement {
  /**
   * 是否默认开
   */
  @property({ type: Boolean })
  value: boolean = false

  /**
   * 自定义开关切换逻辑
   */
  @property({ type: Function })
  toggleHandler?: (value: boolean) => boolean

  private _defaultToggle(value: boolean) {
    return !value
  }

  onClick() {
    let newValue = this.value
    if (this.toggleHandler) {
      newValue = this.toggleHandler(this.value)
    } else {
      newValue = this._defaultToggle(this.value)
    }

    if (newValue !== this.value) {
      this.value = newValue
      this.dispatchEvent(new CustomEvent('change', {
        detail: { value: newValue },
        bubbles: true,
        composed: true
      }))

    }

  }
  render() {
    return html`<div 
    @click="${this.onClick}"
    class="switch ${this.value ? "switch__on" : "switch__off"}"
    ></div> `;
  }
}
