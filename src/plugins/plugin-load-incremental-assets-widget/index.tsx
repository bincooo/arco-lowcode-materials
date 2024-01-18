import { project } from '@alilc/lowcode-engine';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Button } from '@alifd/next';
import { Message } from '@alifd/next';
import { v4 as uuidv4 } from 'uuid'

const id = `file-${uuidv4()}`
const loadSchema = (scenarioName: string) => {
  return () => {
    let input:any = document.querySelector("#" + id)
    if (!input) {
      input = document.createElement('input')
      input.id = id
      input.type = 'file'
      input.accept = '.json'
      input.hidden = true
      input.onchange = handleFileSelect(scenarioName, input)
      document.body.appendChild(input)
    }
    input.click()
  }
};

function handleFileSelect(scenarioName: string, input: any) {
  return (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = (e: any) => {
        const fileContent = e.target.result
        
        project.importSchema(JSON.parse(fileContent));
        project.simulatorHost?.rerender();

        setProjectSchemaToLocalStorage(scenarioName, fileContent)
      }
    }
    input.remove()
  }
}

const getLSName = (scenarioName: string, ns: string = 'projectSchema') => `${scenarioName}:${ns}`;

const setProjectSchemaToLocalStorage = (scenarioName: string, content: string) => {
  if (!scenarioName) {
    console.error('scenarioName is required!');
    return;
  }
  window.localStorage.setItem(getLSName(scenarioName), content);
}

const LoadIncrementalAssetsWidgetPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
      const scenarioName = config.get('scenarioName');

      skeleton.add({
        name: 'loadAssetsSample',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
          width: 80,
        },
        content: (
          <Button onClick={loadSchema(scenarioName)}>
            加载schema
          </Button>
        ),
      });
    },
  };
}
LoadIncrementalAssetsWidgetPlugin.pluginName = 'LoadIncrementalAssetsWidgetPlugin';
export default LoadIncrementalAssetsWidgetPlugin;