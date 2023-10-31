<template>
    <a-layout-sider v-model:collapsed="store.collapsed" mode="inline" width="250" collapsible>
        <button :style="`padding-left: ${store.collapsed ? '1.75rem' : '1.5rem'
            }`" class="flex items-center text-white justify-start w-full text-xl px-7.5 h-16"
            @click="store.changeVisible()">
            <MenuOutlined />
            <span v-if="!store.collapsed" class="ml-3 text-base">{{
                store.product.label
            }}</span>
        </button>
        <LayoutSideMenuItems v-if="!disabled" :items="productMenu()" />
    </a-layout-sider>
</template>
  
<script setup>
import { MenuOutlined } from "@ant-design/icons-vue";
import { useDefaultStore } from "@/stores/index";

const store = useDefaultStore();

const props = defineProps({
    disabled: {
        type: Boolean,
        required: false,
    },
});

const productMenu = () => {
    return [
        {
            key: "/first-ui/home",
            title: "First-UI",
            icon: "dashboard.svg",
        },
        {
            key: "/second-ui/home",
            title: "Second-UI",
            icon: "recordings.svg",
        }
    ]
};
</script>
  