import alt from '../alt';

class TodoActions {
  constructor() {
    this.generateActions(
      'create',
      'updateText',
      'toggleComplete',
      'toggleCompleteAll',
      'destroy',
      'destroyCompleted'
    );
  }
}

module.exports = alt.createActions(TodoActions);
