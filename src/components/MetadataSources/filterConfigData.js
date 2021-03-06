const filterConfig = [
  {
    label: 'Implementation Status',
    name: 'status',
    cql: 'status',
    values: [
      { name: 'Active', cql: 'active' },
      { name: 'Wish', cql: 'wish' },
      { name: 'Implementation', cql: 'implementation' },
      { name: 'Closed', cql: 'closed' },
      { name: 'Impossible', cql: 'impossible' }
    ],
  },
  {
    label: 'Selected',
    name: 'selected',
    cql: 'selected',
    values: [
      { name: 'All', cql: 'all' },
      { name: 'Some', cql: 'some' },
      { name: 'None', cql: 'none' },
    ],
  }
];

export default filterConfig;
