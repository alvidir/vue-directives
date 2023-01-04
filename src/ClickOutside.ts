import { DirectiveBinding, ObjectDirective } from "vue";

type FocusableElement = HTMLInputElement | HTMLTextAreaElement;
type GenericEventHandler = (event: any) => void;

interface ExtendedDirective extends ObjectDirective {
  handleClickOutside: GenericEventHandler;
}

const clickOutside = {
  beforeMount: (el: FocusableElement, binding: DirectiveBinding) => {
    const thisDirective = binding.dir as ExtendedDirective;
    thisDirective.handleClickOutside = (event: any) => {
      if (!(el == event.target || el.contains(event.target))) {
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
