import { expect } from 'chai'
import store from '@/store/modules/notifications.js';
import Notification from '@/entities/notification.js';

describe('notifications mutations add', () => { 
  const state = { 
    loading: false,
    notifId: 1,
    notifs: []
  };
    
  const { mutations } = store;
  mutations.add(state, 'Bonjour madame!');

  it('increments ID when it adds a notification', () => {
    expect(state.notifId).to.equal(2);
  });

  it('adds the new notif', () => {
    expect(state.notifs.length).to.equal(1);
  });

  it('add the good id to the notification', () => {
    expect(state.notifs[0].id).to.equal(1);
  });
});

describe('notifications mutations delete', () => {
  const state = { 
    loading: false,
    notifId: 3,
    notifs: [new Notification({ id: 1, text: 'Bonjour madame!'}),
             new Notification({ id: 2, text: 'Bonjour Mam!'})]
  };
    
  const { mutations } = store;

  mutations.delete(state, 1);

  it('removes the notification', () => {
    expect(state.notifs.filter(n => n.id === 1).length).to.equal(0);
  });

  it('keeps good notification', () => {
    expect(state.notifs.filter(n => n.id === 2).length).to.equal(1)
  });
});