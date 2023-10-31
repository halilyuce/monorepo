<template>
    <a-layout-header
    >
      <div class="flex items-center justify-between space-x-6 mx-4 h-full">
        <nuxt-link to="/">
          Portal
        </nuxt-link>
  
        <div class="flex items-center space-x-1">
          <a-tooltip>
            <template #title
              >You have chosen the Rolling feature release and you will see the
              new features as soon as they are available. You can switch to the
              Stable release in the User Settings panel.
            </template>
            <a-tag
              color="purple"
              style="margin: 0"
              ><strong>ROLLING</strong></a-tag
            >
          </a-tooltip>
          <a-button
            type="text"
            size="small"
            style="color: white; display: flex; align-items: center; height: 22px"
            target="blank"
          >
            <QuestionCircleFilled class="text-lg" />
          </a-button>
        </div>
      </div>
    </a-layout-header>
  </template>
  