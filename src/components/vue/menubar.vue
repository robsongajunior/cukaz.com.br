<template>
	<Menubar
		:model="items"
		:pt="{
			root: {class: '!bg-transparent !border-0'},
			body: {class: ''},
		}"
	/>
</template>

<script setup>
	import Menubar from 'primevue/menubar';

	const items = [
		{
			label: 'Sobre Nós',
			icon: 'pi pi-home',
			url: '/sobre/'
		},
		{
			label: 'Sabores',
			icon: 'pi pi-star',
			url: '/sabores/'
		},
		{
			label: 'Contato',
			icon: 'pi pi-envelope',
			url: '/contato/'
		}
	];
</script>

<style>
	.p-menubar-root-list {
		display: flex !important;
		gap: 1rem !important;
		font-size: 0.875rem;
    line-height: 1.25rem;
	}

	.p-menubar-item-link  {
		overflow: visible !important;
		line-height: 2rem !important;
	}
</style>
