<template{{#htmlPreprocess}} lang="{{#if_eq htmlPreprocessConfig "pug"}}pug{{/if_eq}}"{{/htmlPreprocess}}>
  {{#unless htmlPreprocess}}
    <div>
      {{#router}}
      <router-view />
      {{else}}
      <home-page />
      {{/router}}
    </div>
  {{/unless}}

  {{#htmlPreprocess}}
    {{#if_eq htmlPreprocessConfig "pug"}}
      div
        {{#router}}
        router-view
        {{else}}
        home-page
        {{/router}}
    {{/if_eq}}
  {{/htmlPreprocess}}
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
