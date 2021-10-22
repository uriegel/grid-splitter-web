!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["grid-splitter"]=e():t["grid-splitter"]=e()}(self,(function(){return(()=>{var t={547:()=>{const t=document.createElement("template");t.innerHTML='  \n    <style>\n        #splitterGrid {\n            display:flex;\n            flex-grow: 1;\n            flex-direction: row;        \n            width: 100%;\n            height: 100%;\n        }   \n        .slot {\n            flex-grow: 1;\n            display: flex;\n        }     \n        #splitter {\n            flex: 0 0 6px;\n            cursor: ew-resize;\n            transition: background-color 0.4s;\n            background-color: var(--gridsplitter-grip-color);\n        }\n        #splitter:hover {\n            background-color: var(--gridsplitter-grip-hover-color);\n        }\n        #splitter:active {\n            background-color: var(--gridsplitter-grip-active-color);\n        }        \n        #splitterGrid.vertical {\n            flex-direction: column;\n        }\n        .secondInvisible #second, .secondInvisible #splitter {\n            display: none;\n        }\n        .vertical #splitter {\n            cursor: ns-resize;\n        }\n    </style>\n    <div id="splitterGrid">\n        <div class="slot" id="first">\n            <slot name="first"></slot>\n        </div>\n        <div id="splitter"></div>\n        <div class="slot" id="second">\n            <slot name="second"></slot>\n        </div>\n    </div>\n';class e extends HTMLElement{constructor(){super();var e=document.createElement("style");document.head.appendChild(e),e.sheet.insertRule(":root {\n            --gridsplitter-grip-color : gray;\n            --gridsplitter-grip-hover-color : rgb(94, 94, 94);\n            --gridsplitter-grip-active-color : rgb(61, 61, 61);\n        }"),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.splitterGrid=this.shadowRoot.getElementById("splitterGrid"),this.splitter=this.shadowRoot.getElementById("splitter"),this.first=this.shadowRoot.getElementById("first"),this.second=this.shadowRoot.getElementById("second"),"vertical"==this.attributes.orientation&&this.splitterGrid.classList.add("vertical")}connectedCallback(){this.splitter.addEventListener("mousedown",(t=>{if(1!=t.which)return;const e="vertical"==this.getAttribute("orientation"),i=e?this.first.offsetHeight:this.first.offsetWidth,s=e?this.second.offsetHeight:this.second.offsetWidth,r=e?t.pageY:t.pageX;let o=performance.now();const n=t=>{const n=performance.now();if(n-o>20){o=n;let l=(e?t.pageY:t.pageX)-r;l<10-i&&(l=10-i),l>(e?this.first.parentElement.offsetHeight:this.first.parentElement.offsetWidth)-10-i-6&&(l=(e?this.first.parentElement.offsetHeight:this.first.parentElement.offsetWidth)-10-i-6);const a=s-l,d=`0 0 ${a/(a+(i+l)+(e?this.splitter.offsetHeight:this.splitter.offsetWidth))*100}%`;this.second.style.flex=d}t.stopPropagation(),t.preventDefault()},l=t=>{window.removeEventListener("mousemove",n,!0),window.removeEventListener("mouseup",l,!0),t.stopPropagation(),t.preventDefault()};window.addEventListener("mousemove",n,!0),window.addEventListener("mouseup",l,!0),t.stopPropagation(),t.preventDefault()}))}static get observedAttributes(){return["orientation","secondinvisible"]}attributeChangedCallback(t,e,i){switch(t){case"orientation":"vertical"==i?this.splitterGrid.classList.add("vertical"):this.splitterGrid.classList.remove("vertical");break;case"secondinvisible":"true"==i?this.splitterGrid.classList.add("secondInvisible"):this.splitterGrid.classList.remove("secondInvisible")}}adjustPosition(t,e){if(this.position=t>0?Math.min(this.position+t,this.items.length-1):Math.max(this.position+t,0),e){const e=t>0;this.scrollPosition+=e?Math.max(0,this.position-this.scrollPosition-this.itemsPerPage+1):-Math.max(0,this.scrollPosition-this.position),e&&this.position-this.scrollPosition<0&&(this.scrollPosition=this.position),!e&&this.position-this.scrollPosition-this.itemsPerPage+1>=0&&(this.scrollPosition=this.position-this.itemsPerPage+1)}}render(){this.renderItems(),this.renderScrollbarGrip()}renderItems(){let t;for(;t=this.tableBody.lastChild;)this.tableBody.removeChild(t);for(let t=this.scrollPosition;t<Math.min(this.itemsPerPage+1+this.scrollPosition,this.items.length);t++){const e=this.renderItem(this.items[t],t);this.tableBody.appendChild(e)}}renderItem(t,e){const i=document.createElement("tr");return this.columns.forEach((e=>{const s=document.createElement("td");e.isRightAligned&&s.classList.add("rightAligned"),s.classList.add(),e.render(s,t),i.appendChild(s)})),this.position==e&&i.classList.add("isCurrent"),t.isSelected&&i.classList.add("isSelected"),i}renderScrollbarGrip(){const t=Math.max(0,this.items.length-this.itemsPerPage)+1,e=Math.max(this.scrollbarElement.clientHeight*(this.itemsPerPage/this.items.length||1),10);this.scrollbarGrip.style.top=(this.scrollbarElement.clientHeight-e)*(this.scrollPosition/(t-1)),this.scrollbarGrip.style.height=`${e}px`,this.itemsPerPage>this.items.length-1?(this.scrollbar.classList.add("hidden"),this.tableroot.classList.remove("scrollbarActive")):(this.scrollbar.classList.remove("hidden"),this.tableroot.classList.add("scrollbarActive"))}restrictTo(t){if(this.restriction){const e=this.restrictCallback(this.items,this.restrictionInput.value+t);if(e.length>0)return this.restrictionInput.value+=t,this.items=e,this.setPosition(0),this.render(),!0}else{const e=this.restrictCallback(this.items,t);if(e&&e.length>0)return this.restriction={originalItems:this.items},this.restrictionInput.classList.remove("none"),setTimeout((()=>this.restrictionInput.classList.remove("invisible"))),this.restrictionInput.value=t,this.items=e,this.setPosition(0),this.render(),!0}return!1}}customElements.define("grid-splitter",e)}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};return(()=>{"use strict";i.r(s);var t=i(547),e={};for(const i in t)"default"!==i&&(e[i]=()=>t[i]);i.d(s,e)})(),s})()}));