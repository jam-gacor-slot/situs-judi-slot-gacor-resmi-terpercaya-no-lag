'use babel';

import SitusJudiSlotGacorResmiTerpercayaNoLagView from './situs-judi-slot-gacor-resmi-terpercaya-no-lag-view';
import { CompositeDisposable } from 'atom';

export default {

  situsJudiSlotGacorResmiTerpercayaNoLagView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.situsJudiSlotGacorResmiTerpercayaNoLagView = new SitusJudiSlotGacorResmiTerpercayaNoLagView(state.situsJudiSlotGacorResmiTerpercayaNoLagViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.situsJudiSlotGacorResmiTerpercayaNoLagView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'situs-judi-slot-gacor-resmi-terpercaya-no-lag:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.situsJudiSlotGacorResmiTerpercayaNoLagView.destroy();
  },

  serialize() {
    return {
      situsJudiSlotGacorResmiTerpercayaNoLagViewState: this.situsJudiSlotGacorResmiTerpercayaNoLagView.serialize()
    };
  },

  toggle() {
    console.log('SitusJudiSlotGacorResmiTerpercayaNoLag was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
