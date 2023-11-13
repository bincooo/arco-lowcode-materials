import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeSetterType } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Row"
const componentTitle: string = "栅格行"
const objectConfig: IPublicTypeSetterType = {
    componentName: 'ObjectSetter',
    props: {
        config: {
            items: [
                {
                    name: 'xs',
                    title: 'xs',
                    setter: 'NumberSetter'
                },
                {
                    name: 'sm',
                    title: 'sm',
                    setter: 'NumberSetter'
                },
                {
                    name: 'md',
                    title: 'md',
                    setter: 'NumberSetter'
                },
            ]
        }
    }
}

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'align',
                title: {
                    label: '竖直对齐',
                    tip: 'align | 竖直对齐方式 ( align-items )'
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                {
                                    title: 'start',
                                    value: 'start'
                                },
                                {
                                    title: 'center',
                                    value: 'center'
                                },
                                {
                                    title: 'end',
                                    value: 'end'
                                },
                                {
                                    title: 'stretch',
                                    value: 'stretch'
                                },
                            ]
                        }
                    }
                ]
            },
            {
                name: 'justify',
                title: {
                    label: '水平对齐',
                    tip: 'justify | 水平对齐方式 (justify-content)'
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                {
                                    title: 'start',
                                    value: 'start'
                                },
                                {
                                    title: 'center',
                                    value: 'center'
                                },
                                {
                                    title: 'end',
                                    value: 'end'
                                },
                                {
                                    title: 'space-around',
                                    value: 'space-around'
                                },
                                {
                                    title: 'space-between',
                                    value: 'space-between'
                                },
                            ]
                        }
                    }
                ]
            },
            {
                name: 'gutter',
                title: {
                    label: '栅格间隔',
                    tip: 'gutter | 栅格间隔，单位是px 栅格间隔。可传入响应式对象写法 { xs: 4, sm: 6, md: 12}，传入数组 [ 水平间距， 垂直间距 ] 来设置两个方向。'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    objectConfig,
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: objectConfig
                        }
                    }
                 ]
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
    npm: pack("Grid", componentName),
    category: '布局',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: baseEvents,
            style: true
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'Col' ]
            }
        },
        advanced: {
            initialChildren: [
                {
                    componentName: 'Col',
                    props: { span: 12 }
                },
                {
                    componentName: 'Col',
                    props: { span: 12 }
                },
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
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};