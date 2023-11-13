import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Image"
const componentTitle: string = "图片"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'preview',
                title: {
                    label: '开启预览',
                    tip: 'preview | 是否开启预览',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'simple',
                title: {
                    label: '简洁模式',
                    tip: 'simple | 是否开启简洁模式',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'src',
                title: {
                    label: '地址',
                    tip: 'src | 图片获取地址',
                },
                setter: { componentName: 'StringSetter' }
            },
            {
                name: 'description',
                title: {
                    label: '描述',
                    tip: 'description | 描述',
                },
                setter: { componentName: 'StringSetter' }
            },
            {
                name: 'title',
                title: {
                    label: '标题',
                    tip: 'title | 标题',
                },
                setter: { componentName: 'StringSetter' }
            },
            {
                name: 'footerPosition',
                title: {
                    label: '底部显示的位置',
                    tip: 'footerPosition | 底部显示的位置',
                },
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { title: 'inner', value: 'inner' },
                            { title: 'outer', value: 'outer' },
                        ]
                    }
                }
            },
            {
                name: 'error',
                title: {
                    label: 'error内容',
                    tip: 'error | error 状态下显示的内容',
                },
                setter: { componentName: 'SlotSetter' }
            },
            {
                name: 'loader',
                title: {
                    label: '加载过渡',
                    tip: 'loader | 加载过渡效果，为 true 显示默认加载效果',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'height',
                title: {
                    label: '图片显示高度',
                    tip: 'height | 图片显示高度',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'NumberSetter' },
                ]
            },
            {
                name: 'width',
                title: {
                    label: '图片显示宽度',
                    tip: 'width | 图片显示宽度',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'NumberSetter' },
                ]
            },
            {
                name: 'lazyload',
                title: {
                    label: '开启懒加载',
                    tip: 'lazyload | 开启懒加载',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'actions',
                title: {
                    label: '额外操作',
                    tip: 'actions | 额外操作',
                },
                setter: [
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'SlotSetter' }
                        }
                    },
                ]
            },
            {
                name: 'loaderClassName',
                title: {
                    label: 'loader的样式Class',
                    tip: 'loaderClassName | loader 的样式，将覆盖默认过渡效果'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    }
                ]
            },
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: '',
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
        }
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: '',
        schema: {
            componentName,
            title: componentTitle,
            props: {
                width: 200,
                preview: false,
                src: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp'
            }
        }
    },
];

export default {
  ...Metadata,
  snippets
};
