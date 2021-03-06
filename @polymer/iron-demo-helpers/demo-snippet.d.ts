/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   demo-snippet.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * `demo-snippet` is a helper element that displays the source of a code snippet
 * and its rendered demo. It can be used for both native elements and Polymer
 * elements.
 *
 *     Example of a native element demo
 *
 *         <demo-snippet>
 *           <template>
 *             <input type="date">
 *           </template>
 *         </demo-snippet>
 *
 *     Example of a Polymer <paper-checkbox> demo
 *
 *         <demo-snippet>
 *           <template>
 *             <paper-checkbox>Checkbox</paper-checkbox>
 *             <paper-checkbox checked>Checkbox</paper-checkbox>
 *           </template>
 *         </demo-snippet>
 *
 * ### Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--demo-snippet` | Mixin applied to the entire element | `{}`
 * `--demo-snippet-demo` | Mixin applied to just the demo section | `{}`
 * `--demo-snippet-code` | Mixin applied to just the code section | `{}`
 */
interface DemoSnippetElement extends LegacyElementMixin, HTMLElement {
  _markdown: string|null|undefined;
  attached(): void;
  detached(): void;
  _updateMarkdown(): void;
  _copyToClipboard(): any;
  _resetCopyButtonState(): void;
}

export {DemoSnippetElement};

declare global {

  interface HTMLElementTagNameMap {
    "demo-snippet": DemoSnippetElement;
  }
}
