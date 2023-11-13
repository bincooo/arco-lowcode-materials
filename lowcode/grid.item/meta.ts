import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeSetterType } from '@alilc/lowcode-types';
import pack from '../pack'

const componentName: string = "GridItem"

function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
}

const objectConfig: IPublicTypeSetterType = {
    componentName: 'ObjectSetter',
    props: {
        config: {
            items: [
                {
                    name: 'lg',
                    title: 'lg',
                    setter: 'NumberSetter'
                },
                {
                    name: 'md',
                    title: 'md',
                    setter: 'NumberSetter'
                },
                {
                    name: 'sm',
                    title: 'sm',
                    setter: 'NumberSetter'
                },
                {
                    name: 'xl',
                    title: 'xl',
                    setter: 'NumberSetter'
                },
                {
                    name: 'xs',
                    title: 'xs',
                    setter: 'NumberSetter'
                },
                {
                    name: 'xxl',
                    title: 'xxl',
                    setter: 'NumberSetter'
                },
                {
                    name: 'xxxl',
                    title: 'xxxl',
                    setter: 'NumberSetter'
                },
            ]
        }
    }
}

const fieldConfig: IPublicTypeFieldConfig[] = [
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'suffix',
                title: {
                    label: '后缀元素',
                    tip: 'suffix | 是否是后缀元素'
                },
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'offset',
                title: {
                    label: '左侧间隔',
                    tip: 'offset | 左侧的间隔格数'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    objectConfig,
                 ]
            },
            {
                name: 'span',
                title: {
                    label: '跨越的格数',
                    tip: 'span | 跨越的格数'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    objectConfig,
                 ]
            }
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: "栅格单元",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack("Grid", componentName),
    category: '布局',
    group: 'arco组件',
    props: [ ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                {
                  name: 'onClick',
                  template: "\nonClick(event, ${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                },
            ],
            style: true
        },
        component: {
            isContainer: true,
            nestingRule: {
                parentWhitelist: [ 'Grid' ]
            },
        },
        advanced: {
            getResizingHandlers: (_: any) => {
              return ['e'];
            },
            callbacks: {
              onResizeStart: (e, currentNode) => {
                const parent = currentNode.parent;
                if (parent) {
                  const parentNode = parent.getDOMNode();
                  if (parentNode) {
                    currentNode.parentRect = parentNode.getBoundingClientRect();
                  }
                }
                currentNode.beforeSpan = currentNode.getPropValue('span') || 24;
                currentNode.startRect = currentNode.getRect();
              },
              onResize: (e, currentNode) => {
                const { deltaX } = e;
                const startWidth = currentNode.startRect
                  ? currentNode.startRect.width
                  : currentNode.beforeSpan * (currentNode.parentRect.width / 24);
                let width = startWidth + deltaX;
                if (!currentNode.startRect) {
                  currentNode.startRect = { width };
                }
                width = clamp(width, 0, currentNode.parentRect.width);
                const allowMoveX = Math.round(width - startWidth); // 实际被允许的x轴移动
                currentNode.moveColumn = Math.round(allowMoveX / (currentNode.parentRect.width / 24)); // 计算移动距离所占的列
                if (allowMoveX > 0) {
                  currentNode.moveColumn++;
                } else {
                  currentNode.moveColumn--;
                }
                currentNode.targetColumn = clamp(currentNode.beforeSpan + currentNode.moveColumn, 1, 24);
                // currentNode.setPropValue('span', currentNode.targetColumn);
                const dom = currentNode.getDOMNode();
                dom.style.width = `${Math.round(width)}px`;
                dom.style.flex = 'none';
                dom.style.maxWidth = '100%';
              },
              onResizeEnd: (e, currentNode: any) => {
                currentNode.getDOMNode().style.cssText = '';
                currentNode.targetColumn = clamp(currentNode.targetColumn, 1, 24);
                currentNode.setPropValue('span', currentNode.targetColumn);
              },
            },
        } as any,
    }
};

const snippets: IPublicTypeSnippet[] = [
    {
        title: "栅格单元",
        screenshot: require('./__screenshots__/1.png'),
        schema: {
            componentName,
            props: {
                span: 12
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};