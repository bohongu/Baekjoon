import { render } from "./main";

export const { useState } = (function makeMyhooks() {
  const hooks = [];
  let hookIndex = 0;

  function useState(initialValue) {
    if (hooks[hookIndex] === undefined) {
      hooks[hookIndex] = initialValue;
    }
    const state = hooks[hookIndex];

    console.log("hooks", hooks);

    const setState = (function () {
      const currentIndex = hookIndex;

      return function (value) {
        hooks[currentIndex] = value;
        hookIndex = 0;
        render();
      };
    })();

    hookIndex++;
    return [state, setState];
  }

  return { useState };
})();
