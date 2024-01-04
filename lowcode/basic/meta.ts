import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Basic"
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
                    { componentName: 'StringSetter', condition: () => true },
                    { componentName: 'SlotSetter' },
                ],
                condition: (curr) => {
                    const { tag } = curr.node?.schema?.props ?? {}
                    if (tag == 'img') {
                        return false
                    }
                    return true
                }
            }
        ],
    },
    {
        name: 'attr',
        title: {
            label: '标签属性',
            tip: 'attr | 标签属性',
        },
        setter: {
            componentName: 'ArraySetter',
            props: {
                itemSetter: {
                    componentName: 'ObjectSetter',
                    props: {
                        config: {
                            items: [
                                { name: 'key', title: 'key', setter: 'StringSetter', condition: () => true },
                                { name: 'value', title: 'value', setter: [ 'StringSetter', 'JsonSetter' ] },
                            ]
                        }
                    }
                }
            }
        }
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: "文本",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '基础',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: baseEvents,
            style: true,
        },
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: "text",
        screenshot: require('./__screenshots__/text.png'),
        schema: {
            title: 'text',
            componentName,
            props: {
                tag: 'text',
                children: '我是文本内容'
            }
        }
    },
    {
        title: "div",
        screenshot: require('./__screenshots__/div.png'),
        schema: {
            title: 'div',
            componentName,
            props: {
                tag: 'div',
                children: '我是DIV标签'
            }
        }
    },
    {
        title: "ol",
        screenshot: require('./__screenshots__/ol.png'),
        schema: {
            title: 'ol',
            componentName,
            props: {
                tag: 'ol',
                children: '我是OL标签'
            }
        }
    },
    {
        title: "ul",
        screenshot: require('./__screenshots__/ul.png'),
        schema: {
            title: 'ul',
            componentName,
            props: {
                tag: 'ul',
                children: '我是UL标签'
            }
        }
    },
    {
        title: "li",
        screenshot: require('./__screenshots__/li.png'),
        schema: {
            title: 'li',
            componentName,
            props: {
                tag: 'li',
                children: '我是LI标签'
            }
        }
    },
    {
        title: "p",
        screenshot: require('./__screenshots__/p.png'),
        schema: {
            title: 'p',
            componentName,
            props: {
                tag: 'p',
                children: '我是P标签'
            }
        }
    },
    {
        title: "img",
        screenshot: require('./__screenshots__/img.png'),
        schema: {
            title: 'img',
            componentName,
            props: {
                tag: 'img',
                attr: [
                    {
                        key: 'src',
                        value: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
                    },
                    {
                        key: 'width',
                        value: '200px'
                    }
                ]
            }
        }
    },
];

export default {
  ...Metadata,
  snippets
};
