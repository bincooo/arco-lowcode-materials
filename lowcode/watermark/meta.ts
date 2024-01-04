import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Watermark"
const componentTitle: string = "水印"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'rotate',
                title: {
                    label: '单个水印旋转角度',
                    tip: 'rotate | 单个水印旋转角度',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'content',
                title: {
                    label: '水印的文字内容',
                    tip: 'content | 水印的文字内容',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'gap',
                title: {
                    label: '水印间的间距',
                    tip: 'gap | 水印间的间距 [number, number]',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'offset',
                title: {
                    label: '偏移量',
                    tip: 'offset | 水印相对于 container 容器的偏移量 [number, number]',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'width',
                title: {
                    label: '单个水印的宽度',
                    tip: 'width | 单个水印的宽度。image 时默认为 100，content 时默认为文本宽度',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'height',
                title: {
                    label: '单个水印的高度',
                    tip: 'height | 单个水印的高度',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'zIndex',
                title: 'zIndex',
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'getContainer',
                title: {
                    label: '添加水印的容器wrapper',
                    tip: 'getContainer | 添加水印的容器 wrapper，会把水印 dom 作为 container 的第一个子节点展示'
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'getContainer',
                            template: "\n\n  getContainer(${extParams}) {\n    // 添加水印的容器wrapper\n    console.log('getContainer');\n  }\n"
                        }
                    },
                ],
            },
        ]
    },
    {
        name: 'fontStyle',
        title: {
            label: '水印文字样式',
            tip: 'fontStyle | 水印文字样式',
        },
        setter: [
            {
                componentName: 'ObjectSetter',
                props: {
                    config: {
                        items: [
                            { name: 'color', title: 'color', setter: 'ColorSetter' },
                            { name: 'fontFamily', title: 'fontFamily', setter: 'StringSetter' },
                            { name: 'fontSize', title: 'fontSize', setter: [ 'NumberSetter', 'StringSetter' ] },
                            { name: 'fontWeight', title: 'fontWeight', setter: [ 'NumberSetter', 'StringSetter' ] },
                        ]
                    }
                }
            },
        ],
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '反馈',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
            ],
            style: true,
        },
        component: {
            isContainer: true,
        },
        advanced: {
            initialChildren: [
                {
                    componentName: "Basic",
                    props: {
                        tag: "div",
                        style: {
                            height: "300px"
                        }
                    },
                    title: "div",
                }
            ]
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
                content: 'Arco Design',
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
