import Vue from "vue";
import Vuetify from "vuetify";
import vueCustomElement from "vue-custom-element";
import Tree from "./tree.vue";

Vue.use(Vuetify);
Vue.use(vueCustomElement);

Vue.config.ignoredElements = ["vce-tree"];
Vue.customElement("vce-tree", Tree); // shadowDOM化すると中のCSSが効かない
