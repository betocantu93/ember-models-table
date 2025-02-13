import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, get} from '@ember/object';
import layout from '../templates/components/expand-all-toggle';

export default
@templateLayout(layout)
class ExpandAllToggleComponent extends Component {

  @action
  doCollapseAllRows() {
    get(this, 'collapseAllRows')();
  }

  @action
  doExpandAllRows() {
    get(this, 'expandAllRows')();
  }
}
