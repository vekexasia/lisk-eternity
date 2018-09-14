import Vue from 'vue';
import Component from 'vue-class-component';
import Home from '../../components/home/home.vue';

@Component({
  components: { Home },
})
export default class App extends Vue {
}
