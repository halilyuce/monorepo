<template>
    <a-layout id="layout-no-sidebar" class="h-screen overflow-hidden">
        <LayoutSideMenuMain :disabled="true" />
        <LayoutAppDrawer />
        <a-layout>
            <LayoutHeader />
            <slot />
        </a-layout>
    </a-layout>
</template>
<script></script>
  