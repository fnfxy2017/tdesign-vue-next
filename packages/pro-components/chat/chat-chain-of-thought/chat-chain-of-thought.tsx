import { defineComponent, toRefs, provide, computed } from 'vue';
import { usePrefixClass, useTNodeJSX, useVModel } from '@tdesign/shared-hooks';
import props from './chat-chain-of-thought-props';
import { Collapse, CollapsePanel } from 'tdesign-vue-next';
import type { TdChatChainOfThoughtProps } from '../type';
import './chat-chain-of-thought.less';

export default defineComponent({
  name: 'TChatChainOfThought',
  props,
  emits: ['update:collapsed', 'collapsed-change'],
  setup(props: TdChatChainOfThoughtProps, { emit }) {
    const COMPONENT_NAME = usePrefixClass('chat-chain-of-thought');
    const renderTNodeJSX = useTNodeJSX();

    const { collapsed, modelValue } = toRefs(props);
    const [innerCollapsed, setInnerCollapsed] = useVModel(
      collapsed,
      modelValue,
      props.defaultCollapsed,
      (value: boolean) => {
        emit('collapsed-change', value);
        props.onCollapsedChange?.(value);
      },
      'collapsed',
    );

    const handleChange = (value: Array<number>) => {
      const newCollapsed = value.length === 0;
      setInnerCollapsed(newCollapsed);
    };

    provide('chat-chain-of-thought-collapsed', innerCollapsed);

    const cls = computed(() => [
      `${COMPONENT_NAME.value}`,
      {
        [`${COMPONENT_NAME.value}--collapsed`]: innerCollapsed.value,
      },
    ]);

    return () => (
      <div class={cls.value}>
        <Collapse
          borderless={true}
          expandIconPlacement={props.expandIconPlacement}
          onChange={handleChange}
          value={innerCollapsed.value ? [] : [0]}
        >
          <CollapsePanel
            value={0}
            v-slots={{
              header: () => renderTNodeJSX('header'),
              expandIcon: () => renderTNodeJSX('expandIcon'),
              default: () => renderTNodeJSX('default'),
            }}
          />
        </Collapse>
      </div>
    );
  },
});
