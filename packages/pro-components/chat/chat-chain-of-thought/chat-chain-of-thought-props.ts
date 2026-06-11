/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { PropType } from 'vue';
import { TdChatChainOfThoughtProps } from '../type';

export default {
  /** 是否折叠（受控） */
  collapsed: {
    type: Boolean as PropType<TdChatChainOfThoughtProps['collapsed']>,
    default: undefined,
  },
  /** v-model 绑定值 */
  modelValue: {
    type: Boolean as PropType<TdChatChainOfThoughtProps['collapsed']>,
    default: undefined,
  },
  /** 是否折叠。非受控属性 */
  defaultCollapsed: {
    type: Boolean as PropType<TdChatChainOfThoughtProps['defaultCollapsed']>,
    default: false,
  },
  /** 折叠面板头内容 */
  header: {
    type: Function as PropType<TdChatChainOfThoughtProps['header']>,
  },
  /** 展开图标 */
  expandIcon: {
    type: Function as PropType<TdChatChainOfThoughtProps['expandIcon']>,
  },
  /** 展开图标位置 */
  expandIconPlacement: {
    type: String as PropType<TdChatChainOfThoughtProps['expandIconPlacement']>,
    default: 'right' as TdChatChainOfThoughtProps['expandIconPlacement'],
    validator(val: TdChatChainOfThoughtProps['expandIconPlacement']): boolean {
      if (!val) return true;
      return ['left', 'right'].includes(val);
    },
  },
  /** 折叠状态变化回调 */
  onCollapsedChange: {
    type: Function as PropType<TdChatChainOfThoughtProps['onCollapsedChange']>,
    default: () => {},
  },
};
