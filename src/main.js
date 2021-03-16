import Vue from 'vue';
/*
 * Element UI
 */
import {
  Dialog, Input, Select, Button, Table, TableColumn, TimePicker, Tooltip, Tag, Alert, Form, FormItem, Card, Col, Badge, TimeSelect, ColorPicker,
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import store from './store';
import App from './App.vue';
// configure language
locale.use(lang);
Vue.component(Dialog.name, Dialog);
Vue.component(Input.name, Input);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Button.name, Button);
Vue.component(Col.name, Col);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(TimePicker.name, TimePicker);
Vue.component(Tooltip.name, Tooltip);
Vue.component(Tag.name, Tag);
Vue.component(Alert.name, Alert);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Card.name, Card);
Vue.component(Badge.name, Badge);
Vue.component(TimeSelect.name, TimeSelect);
Vue.component(ColorPicker.name, ColorPicker);
Vue.config.productionTip = false;
new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
// # sourceMappingURL=main.js.map
