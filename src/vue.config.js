import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

export default (app) => {
  app.use(PrimeVue, {
		theme: {
			preset: Aura
		}
	});
}
