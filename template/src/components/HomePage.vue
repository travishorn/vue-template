<template{{#htmlPreprocess}} lang="{{#if_eq htmlPreprocessConfig "pug"}}pug{{/if_eq}}"{{/htmlPreprocess}}>
  {{#unless htmlPreprocess}}
  <div>

  </div>
  {{/unless}}
  {{#htmlPreprocess}}
    {{#if_eq htmlPreprocessConfig "pug"}}
  div
    {{/if_eq}}
  {{/htmlPreprocess}}
</template>

<script>
export default {
  name: 'home-page'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
