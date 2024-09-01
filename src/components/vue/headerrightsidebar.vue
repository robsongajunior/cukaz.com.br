<template>
  <!-- open sidebar button -->
  <Button
    @click="visibleRight=true"
    icon="pi pi-bars"
    size="small"
    aria-label="Menu"
    :pt="{
			root: { class: 'lg:hidden bg-transparent !border-stone-700' },
      label: { class: 'text-white hover:bg-header-button-hover' },
      icon: { class: 'text-white' }
    }"
  />

  <Sidebar
    v-model:visible="visibleRight"
    position="right"
    :show-close-icon="false"
    :pt="{
			root: {
				class: '!bg-[#333333] pt-2 px-2 pb-20 h-[100%] border-l !border-stone-700 w-[20rem] md:w-[22rem] text-sm'
			},
      header: {
				class: 'hidden'
			},
		 	content: { class: 'p-0'}
    }"
  >
    <!-- close sidebar button -->
    <div class="flex justify-end pb-6 pr-2 md:pr-0">
      <Button
				outlined
				@click="visibleRight=false"
				icon="pi pi-times"
				size="small"
				:pt="{
					root: {class: 'flex-none !w-8 !h-8 !border-stone-700 bg-transparent'},
					icon: { class: 'text-white' }
				}"
			/>
    </div>

		<Menu
			:model="props.items"
			:pt="{
				root: {class: '!bg-[transparent] !border-0 !text-white'},
				icon: { class: '!text-white' },
				label: { class: '!text-white' },
				content: { class: '!text-white' },
				menu: { class: '!text-white' },
				menuitem: { class: '!text-white' }
			}"
		/>
  </Sidebar>
</template>

<script setup>
  import { onUpdated, ref } from 'vue';
  import Button from 'primevue/button';
  import Menu from 'primevue/menu';
  import Sidebar from 'primevue/sidebar';

  let props = defineProps({
    items: Object
  });

  const visibleRight = ref(false);

  function getHTMLElement() {
    return document.querySelector('html');
  };

  function pageScroll(action) {
    const overflow = action === 'stop' ? 'hidden' : 'auto';
    getHTMLElement().style.overflow = overflow;

    return overflow;
  };

  onUpdated(() => {
    visibleRight.value ? pageScroll('stop') : pageScroll('auto');
  });
</script>
