/**
 * Copyright (с) 2015-present, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const columns = {
  bulk: {
    width: '40px',
    className: 'text-center',
    render: [(record, selected) => {
      return '<input ref="checkbox" type="checkbox"' + (selected ? ' checked' : '') + '/>';
    }],
    onClickRefs: {
      checkbox: (function (event, recordId, record, grid) {
        grid.toggleSelected(recordId); // toggle our record id
      })
    }
  },
  name: {
    name: 'First Name', // columns title
    sortCycle: ['asc', 'desc', 'default'], // sort cycle
    render: ['name', record => _.escape(record.name)]
  },
  surname: {
    name: 'Last Name',
    sortCycle: ['asc', 'desc', 'default'],
    render: ['surname', record => _.escape(record.surname)]
  },
  phone: {
    name: 'Phone',
    sortCycle: ['asc', 'desc', 'default'],
    render: ['phone', record => _.escape(record.phone)]
  },
  age: {
    name: 'Age',
    sortCycle: ['asc', 'desc', 'default'],
    render: ['age', record => record.age]
  },
  gender: {
    name: 'Gender',
    sortCycle: ['asc', 'desc', 'default'],
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
