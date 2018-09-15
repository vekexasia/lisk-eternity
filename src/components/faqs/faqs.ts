import Vue from 'vue';
import Component from 'vue-class-component';


@Component({
  name: 'faqs',
})
export default class Faqs extends Vue {
  private faqs = [
    {
      q: 'Why does the amount change?',
      a: 'Gamification. If you want to have a different color or text size you should pay more than standard text'
    },
    {
      q: 'Why does a color cost slightly different than another?',
      a: 'I use the amount to encode the color, textSize and a version param. Please check out the corresponding FAQ'
    },
    {
      q: 'What happens if I don\'t respect the amount?',
      a: 'Depending on what you input as amount it will either never be shown here or have a random color/size scheme'
    },
    {
      q: 'Can you add support to this/that feature?',
      a: 'Probably yes but it all depends on the feature. Thanks to the amount encoding algorithm i left the data space intact and, if possible, i\'d like to avoid using the reference field for options and features.'
    },
    {
      q: 'Can you go a bit more in depth on the amount encoding algorithm?',
      a: 'Sure thing. Amount is: 2^16 *(textLength + textSizeCode * 2 + ceil(textColor / 2)) + ( version + textCode * 2^4 + color * 2^8 )',
    },
    {
      q: 'Did you ensure some space to other features.',
      a: 'Yes. There are about 5 other bits we can exploit using this encoding.',
    },
    {
      q: 'What happens if we need more?',
      a: 'That\'s the reason for the version number. I can decide to change the amount encoding along with a different version packing stuff in a different way',
    },
    {
      q: 'What happens if this website goes down?',
      a: 'Code is opensource and you could always inspect the blockchain to get all the entries.',
    },
    {
      q: 'Why did you do this?',
      a: 'For fun',
    },
  ];
}
