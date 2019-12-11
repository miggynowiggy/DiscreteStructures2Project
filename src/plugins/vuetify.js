import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "md" || "fa"
    },
    theme: {
        themes: {
            light: {
                primary: "#33658A", /*colors.red.darken2*/
                secondary: "#F26419",
                accent: "#F6AE2D",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107"
            }
        }
    }
});
