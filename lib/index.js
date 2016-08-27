/* @flow */

import { CompositeDisposable } from 'atom'

export default {
  subscriptions: null,
  activate() {
    this.subscriptions = new CompositeDisposable()
  },
  deactivate() {
    this.subscriptions.dispose()
  },
  consumeDebuggerRegistry(registry: Object) {
    const delegate = registry.register({
      name: 'Node.js',
      grammarScopes: ['.source.js'],
    })
    this.subscriptions.add(delegate)
  },
}
