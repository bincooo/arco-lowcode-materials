import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import pack, { baseProps } from '../pack'

const componentName: string = "ButtonGroup"
const componentTitle: string = "组合按钮"
const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack("Button", "Group"),
    category: '通用',
    group: 'arco组件',
    props: [

    ],
    configure: {
        props: [ baseProps ],
        supports: {},
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ "Button" ]
            }
        }
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: require('./__screenshots__/group.png'),
        schema: {
            componentName,
            title: componentTitle,
            props: { }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
