import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import HomePage from '@/components/HomePage'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('HomePage.vue', () => {
  /* Describe tests as follows...
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HomePage){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = new Constructor().$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  */
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
