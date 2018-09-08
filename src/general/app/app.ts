import Vue from 'vue';
import Component from 'vue-class-component';
import Home from '../../components/home/home.vue';
import Compose from '../../components/compose/compose.vue';

@Component({
  components: { Home },
})
export default class App extends Vue {
  private compose: boolean = false;
}
