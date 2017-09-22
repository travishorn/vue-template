<template>
  {{#unless htmlPreProcess}}
  <div>

  </div>
  {{/unless}}
  {{#htmlPreProcess}}
    {{#if_eq htmlPreProcessConfig "pug"}}
      div
    {{/if_eq}}
  {{/htmlPreProcess}}
</template>

<script>
export default {
  name: 'home-page'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
