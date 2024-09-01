import { mapDefaultExports } from '@utils/mapDefaultExports';

const getData = {
	components: {
		header: mapDefaultExports(import.meta.glob('@i18n/component/header.json', { eager: true })),
		footer: mapDefaultExports(import.meta.glob('@i18n/component/footer.json', { eager: true }))
	}
};

export { getData };
