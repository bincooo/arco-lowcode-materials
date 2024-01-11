import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';

const appHelper = {
  requestHandlersMap: {
    fetch: createFetchHandler()
  },
  utils: {
    demoUtil: (...params: any[]) => { console.log(`this is a demoUtil with params ${params}`)},
    initState: (self: any, id: string, value: any) => {
        const component = self.$(id)
        if (component && !self.state[id]) {
          self.setState({ [id]: value })
        }
        return self.state[id]
    },
    setValue: (self: any, id: string, value: any) => {
      self.setState({ [id]: value })
    }
  },
  constants: {
    ConstantA: 'ConstantA',
    ConstantB: 'ConstantB'
  }
};
export default appHelper;