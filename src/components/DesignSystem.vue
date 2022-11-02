<template>
  <div class="design-system">
    <div class="container">
      <div class="design-icons">
        <div class="icon icon-dark-mode"></div>
        <div class="icon icon-delete"></div>
        <div class="icon icon-light-mode"></div>
        <div class="icon icon-home"></div>
        <div class="icon icon-lightbulb"></div>
        <div class="icon icon-info"></div>
        <div class="icon icon-done"></div>
        <div class="icon icon-menu"></div>
        <div class="icon icon-close"></div>
      </div>

      <div class="design-colors">
        <div class="color-circle color-circle-white"></div>
        <div class="color-circle color-circle-black"></div>
        <div class="color-circle color-circle-primary"></div>
        <div class="color-circle color-circle-secondary"></div>
      </div>

      <div class="design-typography">
        <h1>This is h1</h1>
        <h2>This is h2</h2>
        <h3>This is h3</h3>
        <h4>This is h4</h4>
        <p>This is p</p>
      </div>
    </div>
  </div>
</template>

<style land="scss">
.design-system {
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 300px;
  overflow: auto;
  border-top: 1px solid var(--body-text-color);
  padding-top: 1rem;
}

.design-colors {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.design-icons {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
</style>