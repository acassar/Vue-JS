<template>
  <div>
    <h4 class="text-primary"> {{director.firstname}} {{director.lastname}} </h4>
    <p>Né le {{director.birthdate | moment("D")}} / {{director.birthdate  | moment("MM")}} / {{director.birthdate | moment("YYYY")}}
    <br>
     Nationalité : {{director.nationality}} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["director"],
  methods: {
  }
};
</script>

<style>
</style>