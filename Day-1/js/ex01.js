class F8 {
  static create(tag, callback) {
    class Component extends HTMLElement {
      registry = {
        length: this.handleLength,
        event: this.handleEvent,
      };
      connectedCallback() {
        var _this = this;
        var shadowRoot = this.attachShadow({ mode: "open" });

        shadowRoot.innerHTML = callback.call(this);
        _this.resolveAttributes(shadowRoot);
      }
      resolveAttributes(elementWrap) {
        var _this = this;
        if (elementWrap.children && elementWrap.children.length) {
          Array.from(elementWrap.children).forEach(function (element) {
            Array.from(element.attributes).forEach(function (attributes) {
              if (attributes.name.startsWith("x-")) {
                var attrName = attributes.name.replace("x-", "");
                var attrValue = attributes.nodeValue;
                typeof _this.registry[attrName] === "function" &&
                  _this.registry[attrName]({
                    element: element,
                    value: attrValue,
                  });
              }
              if (attributes.name.startsWith("@")) {
                var eventName = attributes.name.replace("@", "");
                var eventValue = attributes.nodeValue;
                typeof _this.registry["event"] === "function" &&
                  _this.registry["event"]({
                    element: element,
                    eventName: eventName,
                    value: eventValue,
                  });
              }
            });
            _this.resolveAttributes(element);
          });
        }
      }
      handleLength(obj) {
        var element = obj.element;
        var value = obj.value;

        for (var i = 0; i < value; i++) {
          var elementClone = element.cloneNode(true);
          element.parentElement.append(elementClone);
        }
        element.remove();
      }
      handleEvent(obj) {
        var eventName = obj.eventName;
        var value = obj.value;
        var element = obj.element;
        element.addEventListener("click", function () {
          Function(value).call(null);
        });
      }
    }

    customElements.define(tag, Component);
  }
}
F8.create("hello-world", function () {
  //   return `<div><div><h1 x-length = "10">Hello World</h1> <p x-length = "8">Hoc js khong kho</p></div>
  //   <ul>
  //   <li x-length = "5">Hello anh em</li>
  //   </ul></div>
  //   `;
  return `<div class ="content">
  <h1>Hello anh em</h1>
  <button @click = "console.log(12123)">click me</button></div>
  
  `;
});
// F8.create("todo-app", function () {
//   return `<div class="todo-app">
//     <h1>Todo App</h1>
//     <ul>
//       <li>Todo 1</li>
//       <li>Todo 2</li>
//       <li>Todo 3</li>
//     </ul>
//   </div>`;
// });
