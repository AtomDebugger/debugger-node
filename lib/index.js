/* @flow */

import { CompositeDisposable } from 'atom'
import NodeDebugger from './debugger'

export default {
  subscriptions: null,
  activate() {
    this.subscriptions = new CompositeDisposable()
  },
  deactivate() {
    this.subscriptions.dispose()
  },
  consumeDebuggerRegistry(registry: Object) {
    const delegate = registry.register(NodeDebugger)
    delegate.onDidDestroy(() => {
      this.subscriptions.remove(delegate)
    })
    this.subscriptions.add(delegate)
  },
}
