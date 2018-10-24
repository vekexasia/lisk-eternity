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
      a: 'Sure thing. Amount is: <img src="data:image/png;base64,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">',
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
