import HeroIcon from "./HeroIcon.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("HeroIcon", HeroIcon);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

HeroIcon.install = install;

export default HeroIcon;