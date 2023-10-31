<template>
    <a-drawer placement="left" :width="320" :body-style="{ padding: 0 }" :closable="false" :visible="store.visible"
        @close="closeDrawer">
        <LayoutAppDrawerMenu :title="title" :description="description" />
    </a-drawer>
</template>
<script setup>
import { useDefaultStore } from "@/stores/index";

const store = useDefaultStore();

const props = defineProps({
    title: {
        type: String,
        default: "Apps",
    },
    description: {
        type: String,
        default: "Please select any of the following apps and switch.",
    },
});

const closeDrawer = () => {
    store.visible = false;
};
</script>
  