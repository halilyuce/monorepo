<template>
    <div>
        <button
            class="flex h-16 w-20 justify-center items-center bg-gray-50 text-gray-500 hover:bg-green-50 hover:text-green-600 text-xl transition-all ease-in-out duration-500"
            @click="store.closeDrawer()">
            <CloseOutlined />
        </button>

        <div class="w-full p-5 max-w-sm">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl">
                {{ title }}
            </h5>
            <p class="text-sm font-normal text-gray-500">No application was found assigned to your account. To access portal
                applications, please contact your portal
                administrator
            </p>
        </div>
    </div>
</template>
<script setup>
import {
    CloseOutlined,
} from "@ant-design/icons-vue";
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
</script>
<style lang="scss"></style>
  