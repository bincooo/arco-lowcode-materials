import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack from '../pack'

const componentName: string = "Divider"
const fieldConfig: IPublicTypeFieldConfig[] = [
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
                name: 'orientation',
                title: {
                    label: '文字的位置',
                    tip: 'orientation | 分割线文字的位置'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                {
                                    label: 'left',
                                    value: 'left'
                                },
                                {
                                    label: 'center',
                                    value: 'center'
                                },
                                {
                                    label: 'right',
                                    value: 'right'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: 'type',
                title: {
                    label: '分割线的类型',
                    tip: 'type | 分割线的类型，是水平还是竖直，分别对应 horizontal 和 vertical'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                {
                                    label: 'horizontal',
                                    value: 'horizontal'
                                },
                                {
                                    label: 'vertical',
                                    value: 'vertical'
                                }
                            ]
                        }
                    }
                ]
            },
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: "分割线",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
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
        }
    }
};

const snippets: IPublicTypeSnippet[] = [
    {
        title: "分割线",
        screenshot: require('./__screenshots__/1.png'),
        schema: {
            componentName,
            props: {
                children: '分割线'
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};