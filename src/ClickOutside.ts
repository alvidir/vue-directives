import { DirectiveBinding, ObjectDirective } from "vue";

type FocusableElement = HTMLInputElement | HTMLTextAreaElement;
type MouseEventHandler = (event: MouseEvent) => void;

interface ExtendedDirective extends ObjectDirective {
  handleClickOutside: MouseEventHandler;
}

const clickOutside = {
  beforeMount: (el: FocusableElement, binding: DirectiveBinding) => {
    const thisDirective = binding.dir as ExtendedDirective;
    thisDirective.handleClickOutside = (event: MouseEvent) => {
      if (!(el == event.target || el.contains(event.target as Node | null))) {
        binding.value();
      }
    };

    document.addEventListener("mousedown", thisDirective.handleClickOutside);
  },

  unmounted: (_: FocusableElement, binding: DirectiveBinding) => {
    const thisDirective = binding.dir as ExtendedDirective;
    document.removeEventListener("mousedown", thisDirective.handleClickOutside);
  },
};

export default clickOutside;
