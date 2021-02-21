import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import GlobalFilter from "./GlobalFilter";

const Table = ({ todos, HandleClick }) => {
  // Table Headers
  const COLUMNS = [
    {
      Header: "Todo Id",
      accessor: "id",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      id: "completed",
      Header: "Status",
      accessor: (d) => d.completed.toString(),
    },
    {
      Header: "Action",
      accessor: "userId",

      // Creating a button in todo table using cell property
      Cell: ({ cell }) => (
        <button
          value={cell.row.values.userId}
          onClick={() =>
            // passing userId and TodoId as an arguments to HandleClick Function
            HandleClick(cell.row.values.userId, cell.row.values.id)
          }
        >
          View
        </button>
      ),
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => todos);

  // Destructuring properties and and methods from react-table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  // Table construction using react-table
  return (
    <div>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <i class="fas fa-caret-down"></i>
                    ) : (
                      <i class="fas fa-caret-up"></i>
                    )
                  ) : (
                    ""
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
