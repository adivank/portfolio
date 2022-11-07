<template>
  <section id="simpleProjects" class="bg-light">
    <div class="container">
      <div class="simple-projects__heading">
        <h2>Simple Projects</h2>
        <p>This is a list of smaller projects that usually take very little time. The list will grow I hope soon enough</p>
      </div>
      <Calculator />
      <TodoList />
    </div>
  </section>
</template>

<script>
import Calculator from '@/components/SimpleProjectsComponent/Calculator.vue';
import TodoList from './TodoList.vue';

export default {
  components: { Calculator, TodoList }
}
</script>