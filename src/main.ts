import { App } from "vue";
import ClickOutside from "./ClickOutside";
import WindowOverflow from "./WindowOverflow";

const CLICK_OUTSIDE_ATTR = "click-outside";
const WINDOW_OVERFLOW_ATTR = "window-overflow";

function include(app: App): App {
  return app
    .directive(CLICK_OUTSIDE_ATTR, ClickOutside)
    .directive(WINDOW_OVERFLOW_ATTR, WindowOverflow);
}

export default include;
export { ClickOutside };
