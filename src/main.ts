import ClickOutside from "./ClickOutside";

const CLICK_OUTSIDE = "click-outside";
export default {
  ClickOutside,
};

export function include(app: any): any {
  app.directive(CLICK_OUTSIDE, ClickOutside);
}
