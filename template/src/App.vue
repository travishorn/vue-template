<template>
  <div>
    {{#router}}
    <router-view />
    {{else}}
    <home-page />
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import HomePage from './components/HomePage'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    HomePage{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
