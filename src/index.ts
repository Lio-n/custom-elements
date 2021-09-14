import { init as initHeaderEl } from "./components/header/header";
import { init as initMainEl } from "./components/content-main/content-main";
import { init as initFooterEl } from "./components/footer/footer";

(function main() {
  initHeaderEl();
  initMainEl();
  initFooterEl();
})();
