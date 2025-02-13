import {classNames, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/group-summary-row';
import {intersect} from '@ember/object/computed';

/**
 * @class GroupSummaryRow
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@classNames('group-summary-row')
@tagName('tr')
class GroupSummaryRowComponent extends Component {
  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * @type object[]
   * @property selectedItems
   * @default null
   * @private
   */
  selectedItems = null;

  /**
   * @type object[]
   * @property expandedItems
   * @default null
   * @private
   */
  expandedItems = null;

  /**
   * @type object[]
   * @property groupedItems
   * @default null
   * @private
   */
  groupedItems = null;

  /**
   * @type object[]
   * @property visibleGroupedItems
   * @default null
   * @private
   */
  visibleGroupedItems = null;

  /**
   * @type object[]
   * @property selectedGroupedItems
   * @default null
   */
  @intersect('selectedItems', 'groupedItems')
  selectedGroupedItems;

  /**
   * @type object[]
   * @property expandedGroupedItems
   * @default null
   */
  @intersect('expandedItems', 'groupedItems')
  expandedGroupedItems;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;
}
