import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "AvatarGroup"
const componentTitle: string = "头像组"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'autoFixFontSize',
                title: {
                  label: '自动调整字体',
                  tip: 'autoFixFontSize | 是否自动根据头像尺寸调整字体大小，(优先级低于 Avatar 组件本身)',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'zIndexAscend',
                title: {
                  label: 'z-index 递增',
                  tip: 'zIndexAscend | 头像组内的头像 z-index 递增，默认是递减。',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'size',
                title: {
                  label: '尺寸大小',
                  tip: 'size | 头像的尺寸大小，单位是 px，(优先级低于 Avatar 组件本身)',
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
                name: 'maxCount',
                title: {
                  label: '最多显示数量',
                  tip: 'maxCount | 头像组最多显示的头像数量，多余头像将以 +x 的形式展示。',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack("Avatar", "Group"),
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
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ "Avatar" ]
            }
        }
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: require('./__screenshots__/1.png'),
        schema: {
            componentName,
            title: componentTitle,
            props: {
            }
        }
    },
];

export default {
  ...Metadata,
  snippets
};
