<template>
	<Card
		class="h-full text-balance"
		:pt="{
			root: { class: '!bg-[#222222] border-1 border-stone-700'},
			body: { class: '!py-2 px-3' },
			caption: { class: 'flex flex-col justify-between !flex-row gap-6' },
			label: { class: 'text-white' },
			title: { class: 'text-white flex items-center text-sm' },
			subtitle: { class: 'flex items-center text-white text-sm' }
		}"
	>
		<!-- <template #header>
			<img alt="user header" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
		</template> -->
		
		<template #title>
			<p class="m-0">
				{{ item.title.replace('Cuca de ', '') }}
			</p>
		</template>
		<template #subtitle>
			{{ item.price.value }}
		</template>

		<!--
		<template #content>
			<p class="m-0">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Inventore sed consequuntur error repudiandae numquam deserunt
				quisquam repellat libero asperiores earum nam nobis,
				culpa ratione quam perferendis esse, cupiditate neque quas!
			</p>
		</template>
		 -->

		<!-- <template #footer>
			<div class="flex flex-row-reverse gap-4 mt-1">
				<InputNumber
					v-model="value"
					showButtons
					buttonLayout="vertical"
					style="width: 3rem"
					:min="0"
					:max="99"
				>
					<template #incrementbuttonicon>
						<i class="pi pi-plus"></i>
					</template>
					<template #decrementbuttonicon>
						<i class="pi pi-minus"></i>
					</template>
				</InputNumber>
				<Button label="Adicionar" severity="secondary" outlined />
				<Button label="Fazer pedido" class="w-full" />
			</div>
		</template> -->
	</Card>
</template>

<script setup>
	import Card from 'primevue/card';
	// import Button from 'primevue/button';
	// import InputNumber from 'primevue/inputnumber';
	
	const props = defineProps({
		item: {
			type: Object,
			required: true
		}
	});
</script>
