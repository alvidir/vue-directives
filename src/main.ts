import { App } from "vue";
import ClickOutside from "./ClickOutside";

const CLICK_OUTSIDE_ATTR = "click-outside";

function include(app: App): App {
  return app.directive(CLICK_OUTSIDE_ATTR, ClickOutside);
}

export default include;
export { ClickOutside };
