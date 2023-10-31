<template>
    <a-menu theme="dark" mode="inline" :selectedKeys="[route.path.substr(route.path)]"
        :default-selected-keys="[route.path.substr(route.path)]">
        <template v-for="item in items" :key="item.key">
            <template v-if="!item.children">
                <a-menu-item :key="item.key">
                    <template #icon>
                        <img :src="getImageUrl(item.icon)" />
                    </template>
                    <nuxt-link :to="item.key">{{ item.title }}</nuxt-link>
                </a-menu-item>
            </template>
            <template v-else>
                <a-sub-menu :key="item.key">
                    <template #icon>
                        <img :src="getImageUrl(item.icon)" />
                    </template>
                    <template #title> {{ item.title }}</template>
                    <a-menu-item v-for="children in item.children" :key="children.key">
                        <nuxt-link :to="children.key">{{ children.title }}</nuxt-link>
                    </a-menu-item>
                </a-sub-menu>
            </template>
        </template>
    </a-menu>
</template>
  
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const props = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
});

const getImageUrl = (icon) => {
    return new URL(`../../../assets/icons/${icon}`, import.meta.url).href;
};
</script>
  
<style></style>
  