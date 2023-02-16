import { DirectiveBinding, ObjectDirective } from "vue";

type FocusableElement = HTMLInputElement | HTMLTextAreaElement;
type GenericEventHandler = (event: any) => void;

interface ExtendedDirective extends ObjectDirective {
  handleScreenOverflow: GenericEventHandler;
}

const windowOverflow = {
  beforeMount: (el: FocusableElement, binding: DirectiveBinding) => {
    const thisDirective = binding.dir as ExtendedDirective;
    thisDirective.handleScreenOverflow = (event: any) => {
      binding.value({
        x:
          el.offsetWidth > window.innerWidth ||
          el.scrollWidth > window.innerWidth,
        y:
          el.offsetHeight > window.innerHeight ||
          el.scrollHeight > window.innerHeight,
      });
    };

    window.addEventListener("resize", thisDirective.handleScreenOverflow);
  },

  unmounted: (_: FocusableElement, binding: DirectiveBinding) => {
    const thisDirective = binding.dir as ExtendedDirective;
    window.removeEventListener("resize", thisDirective.handleScreenOverflow);
  },
};

export default windowOverflow;
