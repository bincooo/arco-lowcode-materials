import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack from '../pack'

const componentName: string = "Group"

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: "组合按钮",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack("Button", componentName),
    category: '通用',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: [],
        supports: {},
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'Button' ]
            }
        }
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: "组合按钮",
        screenshot: require('./__screenshots__/group.png'),
        schema: {
            componentName,
            props: { }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
