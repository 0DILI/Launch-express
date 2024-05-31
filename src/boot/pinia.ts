// src/boot/pinia.js
import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';

const pinia = createPinia();
// import pinia from 'src/pinia';

export default boot(({ app }) => {
  app.use(pinia);
});
