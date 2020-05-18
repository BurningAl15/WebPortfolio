import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faCodepen,
  faJs,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faGithub, faCodepen, faJs, faVuejs);

Vue.component("font-awesome-icon", FontAwesomeIcon);
