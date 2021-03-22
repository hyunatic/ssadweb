import React from 'react';
import { MDBDataTableV5, MDBLink, MDBIcon } from 'mdbreact';

export default function Pagination({ leaderboard }) {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Date submitted',
        field: 'date',
        width: 150,
      },
      {
        label: 'Score',
        field: 'score',
        width: 100,
      },
      {
        label: 'View',
        field: 'view',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [],
  });
  //console.log(leaderboard)
  leaderboard.map(x => datatable.rows.push({ name: x.name, date: x.date, score: x.score, view: [<MDBLink to={"/record/" + x.id}><MDBIcon className="red-text" icon="caret-right" size="3x" className="mr-1" /></MDBLink>] }))


  return <MDBDataTableV5 hover entriesOptions={[5, 10, 15]} entries={5} pagesAmount={4} data={datatable} fullPagination />;
}