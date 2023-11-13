import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Avatar"
const componentTitle: string = "头像"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'children',
                title: {
                    label: '内容',
                    tip: 'children | 内容',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'autoFixFontSize',
                title: {
                  label: '自动调整字体',
                  tip: 'autoFixFontSize | 是否自动根据头像尺寸调整字体大小。',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'size',
                title: {
                  label: '尺寸大小',
                  tip: 'size | 头像的尺寸大小，单位是 px',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'shape',
                title: {
                  label: '形状',
                  tip: 'shape | 头像组最多显示的头像数量，多余头像将以 +x 的形式展示。',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'circle', value: 'circle' },
                                { title: 'square', value: 'square' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'triggerType',
                title: {
                  label: '交互类型',
                  tip: 'triggerType | 可点击的头像交互类型',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'mask', value: 'mask' },
                                { title: 'button', value: 'button' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'triggerIcon',
                title: {
                    label: '交互图标',
                    tip: 'triggerIcon | 可点击的头像交互图标',
                },
                setter: { componentName: 'SlotSetter' }
            }
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '数据显示',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: baseEvents,
            style: true,
        },
    },
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: require('./__screenshots__/1.png'),
        schema: {
            componentName,
            title: componentTitle,
            props: {
                children: 'A'
            }
        }
    },
];

export default {
  ...Metadata,
  snippets
};
