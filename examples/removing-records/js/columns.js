/**
 * Copyright (с) 2015-present, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const columns = {
  tools: {
    width: 50,
    render: [() => '<a href="javascript:void(0)" ref="del">[X]</a>'],
    onClickRefs: {
      del: (event, recordId, record, grid) => { // ref="del" click handler
        grid.getModel()
          .delete(recordId)
          .then(() => {
            grid.updateTable();
          });
      }
    }
  },
  name: {
    name: 'First Name',
    sortCycle: ['asc', 'desc', 'default'],
    editor: function () {
      return <input type="text" {...this.props}/>;
    },
    render: ['name', (record) => _.escape(record.name)]
  },
  surname: {
    name: 'Last Name',
    sortCycle: ['asc', 'desc', 'default'],
    editor: function () {
      return <input type="text" {...this.props}/>;
    },
    render: ['surname', (record) => _.escape(record.surname)]
  },
  phone: {
    name: 'Phone',
    sortCycle: ['asc', 'desc', 'default'],
    editor: function () {
      return <input type="text" {...this.props}/>;
    },
    render: ['phone', (record) => _.escape(record.phone)]
  },
  age: {
    name: 'Age',
    sortCycle: ['asc', 'desc', 'default'],
    editor: function () {
      return <UIKernel.Editors.Number {...this.props}/>;
    },
    render: ['age', (record) => record.age]
  },
  gender: {
    name: 'Gender',
    sortCycle: ['asc', 'desc', 'default'],
    editor: function () {
      return <UIKernel.Editors.Select
        {...this.props}
        options={[
          [1, 'Male'],
          [2, 'Female']
        ]}
      />;
    },
    render: ['gender', (record) => {
      switch (record.gender) {
        case 1:
          return 'Male';
        case 2:
          return 'Female';
        default:
          return 'Undefined';
      }
    }]
  }
};
