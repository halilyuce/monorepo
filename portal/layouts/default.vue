<template>
    <a-layout id="layout-default" class="h-screen overflow-hidden">
        <LayoutSideMenuMain />
        <LayoutAppDrawer />
        <a-layout>
            <LayoutHeader />
            <slot />
        </a-layout>
    </a-layout>
</template>
<script></script>
  