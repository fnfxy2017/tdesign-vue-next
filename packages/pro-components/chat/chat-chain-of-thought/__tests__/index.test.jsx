import { mount } from '@vue/test-utils';
import { vi } from 'vitest';
import ChatChainOfThought from '../index';
import ChatChainOfThoughtStep from '../chat-chain-of-thought-step';

describe('ChatChainOfThought', () => {
  describe(':props', () => {
    it(':defaultCollapsed - boolean', () => {
      const wrapper = mount(ChatChainOfThought, {
        props: {
          defaultCollapsed: true,
        },
      });
      expect(wrapper.element).toMatchSnapshot();
    });

    it(':expandIconPlacement - string', () => {
      const wrapper = mount(ChatChainOfThought, {
        props: {
          expandIconPlacement: 'left',
        },
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe('@event', () => {
    it('collapsed-change', async () => {
      const fn = vi.fn();
      const wrapper = mount(ChatChainOfThought, {
        props: {
          collapsed: false,
          'onCollapsedChange': fn,
        },
      });

      await wrapper.find('.t-collapse-panel__header').trigger('click');
      expect(fn).toHaveBeenCalledWith(true);
    });
  });

  describe('<slot>', () => {
    it('default slot', () => {
      const wrapper = mount(ChatChainOfThought, {
        slots: {
          default: '<div>custom content</div>',
        },
      });
      expect(wrapper.element).toMatchSnapshot();
    });

    it('header slot', () => {
      const wrapper = mount(ChatChainOfThought, {
        slots: {
          header: '<div>custom header</div>',
        },
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});

describe('ChatChainOfThoughtStep', () => {
  describe(':props', () => {
    it(':label - string', () => {
      const wrapper = mount(ChatChainOfThoughtStep, {
        props: {
          label: 'Step 1',
        },
      });
      expect(wrapper.element).toMatchSnapshot();
    });

    it(':status - string', () => {
      const wrapper = mount(ChatChainOfThoughtStep, {
        props: {
          label: 'Step 1',
          status: 'active',
        },
      });
      expect(wrapper.find('.t-chat-chain-of-thought__step--active').exists()).toBe(true);
      expect(wrapper.element).toMatchSnapshot();
    });

    it(':description - string', () => {
      const wrapper = mount(ChatChainOfThoughtStep, {
        props: {
          label: 'Step 1',
          description: 'This is a description',
        },
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
