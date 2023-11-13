import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack from '../pack'

const componentName: string = "Col"

function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
}

const fieldConfig: IPublicTypeFieldConfig[] = [
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'span',
                title: {
                    label: '栅格占位格数',
                    tip: 'span | 栅格占位格数'
                },
                setter: [
                    {
                        componentName: 'NumberSetter',
                        props: {
                            max: 24,
                            step: 1,
                            precision: 0
                        }
                    }
                ]
            },
            {
                name: 'offset',
                title: {
                    label: '间隔格数',
                    tip: 'offset | 栅格左侧的间隔格数，间隔内不可以有栅格'
                },
                setter: [
                    { componentName: 'NumberSetter' }
                ]
            },
            {
                name: 'order',
                title: {
                    label: '元素排序',
                    tip: 'order | 对元素进行排序'
                },
                setter: [
                    {
                        componentName: 'NumberSetter',
                        props: {
                            step: 1,
                            precision: 0
                        }
                    }
                ]
            },
            {
                name: 'pull',
                title: {
                    label: '元素排序',
                    tip: 'pull | 对元素进行排序'
                },
                setter: [
                    {
                        componentName: 'NumberSetter',
                        props: {
                            step: 1,
                            precision: 0
                        }
                    }
                ]
            },
            {
                name: 'push',
                title: {
                    label: '元素排序',
                    tip: 'push | 对元素进行排序'
                },
                setter: [
                    {
                        componentName: 'NumberSetter',
                        props: {
                            step: 1,
                            precision: 0
                        }
                    }
                ]
            },
            {
                name: 'flex',
                title: {
                    label: '布局属性',
                    tip: 'flex | 设置 flex 布局属性'
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'StringSetter' },
                ]
            },
        ]
    },
    {
        title: '布局',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'lg',
                title: {
                    label: 'lg',
                    tip: 'lg | >= 992px 响应式栅格'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    { name: 'span', title: 'span', setter: 'NumberSetter' },
                                    { name: 'offset', title: 'offset', setter: 'NumberSetter' },
                                    { name: 'order', title: 'order', setter: 'NumberSetter' },
                                    { name: 'pull', title: 'pull', setter: 'NumberSetter' },
                                    { name: 'push', title: 'push', setter: 'NumberSetter' },
                                ]
                            }
                        }
                    }
                ]
            },
            {
                name: 'md',
                title: {
                    label: 'md',
                    tip: 'md | >= 992px 响应式栅格'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    { name: 'span', title: 'span', setter: 'NumberSetter' },
                                    { name: 'offset', title: 'offset', setter: 'NumberSetter' },
                                    { name: 'order', title: 'order', setter: 'NumberSetter' },
                                    { name: 'pull', title: 'pull', setter: 'NumberSetter' },
                                    { name: 'push', title: 'push', setter: 'NumberSetter' },
                                ]
                            }
                        }
                    }
                ]
            },
            {
                name: 'sm',
                title: {
                    label: 'sm',
                    tip: 'sm | >= 992px 响应式栅格'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    { name: 'span', title: 'span', setter: 'NumberSetter' },
                                    { name: 'offset', title: 'offset', setter: 'NumberSetter' },
                                    { name: 'order', title: 'order', setter: 'NumberSetter' },
                                    { name: 'pull', title: 'pull', setter: 'NumberSetter' },
                                    { name: 'push', title: 'push', setter: 'NumberSetter' },
                                ]
                            }
                        }
                    }
                ]
            },
            {
                name: 'xl',
                title: {
                    label: 'xl',
                    tip: 'xl | >= 992px 响应式栅格'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    { name: 'span', title: 'span', setter: 'NumberSetter' },
                                    { name: 'offset', title: 'offset', setter: 'NumberSetter' },
                                    { name: 'order', title: 'order', setter: 'NumberSetter' },
                                    { name: 'pull', title: 'pull', setter: 'NumberSetter' },
                                    { name: 'push', title: 'push', setter: 'NumberSetter' },
                                ]
                            }
                        }
                    }
                ]
            },
            {
                name: 'xs',
                title: {
                    label: 'xs',
                    tip: 'xs | >= 992px 响应式栅格'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    { name: 'span', title: 'span', setter: 'NumberSetter' },
                                    { name: 'offset', title: 'offset', setter: 'NumberSetter' },
                                    { name: 'order', title: 'order', setter: 'NumberSetter' },
                                    { name: 'pull', title: 'pull', setter: 'NumberSetter' },
                                    { name: 'push', title: 'push', setter: 'NumberSetter' },
                                ]
                            }
                        }
                    }
                ]
            },
            {
                name: 'xxl',
                title: {
                    label: 'xxl',
                    tip: 'xxl | >= 992px 响应式栅格'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    { name: 'span', title: 'span', setter: 'NumberSetter' },
                                    { name: 'offset', title: 'offset', setter: 'NumberSetter' },
                                    { name: 'order', title: 'order', setter: 'NumberSetter' },
                                    { name: 'pull', title: 'pull', setter: 'NumberSetter' },
                                    { name: 'push', title: 'push', setter: 'NumberSetter' },
                                ]
                            }
                        }
                    }
                ]
            },
            {
                name: 'xxxl',
                title: {
                    label: 'xxxl',
                    tip: 'xxxl | >= 992px 响应式栅格'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    { name: 'span', title: 'span', setter: 'NumberSetter' },
                                    { name: 'offset', title: 'offset', setter: 'NumberSetter' },
                                    { name: 'order', title: 'order', setter: 'NumberSetter' },
                                    { name: 'pull', title: 'pull', setter: 'NumberSetter' },
                                    { name: 'push', title: 'push', setter: 'NumberSetter' },
                                ]
                            }
                        }
                    }
                ]
            },
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: "栅格列",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack("Grid", componentName),
    category: '布局',
    group: 'arco组件',
    props: [
    ],
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
            isContainer: true
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
        title: "栅格列",
        screenshot: require('./__screenshots__/1.png'),
        schema: {
            componentName,
            props: {
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};