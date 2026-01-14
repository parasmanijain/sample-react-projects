import { useState, type FC } from 'react';

interface Column {
    id: string;
    label: string;
    sortable: boolean;
}

interface TableProps {
    columns: Column[];
    data: any[];
}

interface TableHeaderProps {
    column: Column;
    onSort: (columnId: string) => void;
}

const TableHeader: FC<TableHeaderProps> = ({ column, onSort }) => {
    const handleSort = () => {
        if (column.sortable) {
            onSort(column.id);
        }
    };

    return (
        <th onClick={handleSort} style={{ cursor: column.sortable ? 'pointer' : 'default' }}>
            {column.label}
        </th>
    );
};

const Table: FC<TableProps> = ({ columns, data }) => {
    const [_, setSortColumn] = useState('');

    const handleSort = (columnId: string) => {
        setSortColumn(columnId);
        console.log("sorting clicked", columnId)
        // Sorting logic would go here according to the selected column
    };

    return (
        <table>
            <thead>
                <tr>
                    {columns.map(column => (
                        <TableHeader key={column.id} column={column} onSort={handleSort} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map(column => (
                            <td key={column.id}>{row[column.id]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// Example usage
export const PropGetters: FC = () => {
    const columns: Column[] = [
        { id: 'name', label: 'Name', sortable: true },
        { id: 'age', label: 'Age', sortable: true },
        { id: 'country', label: 'Country', sortable: false },
    ];

    const data = [
        { name: 'John', age: 30, country: 'USA' },
        { name: 'Alice', age: 25, country: 'Canada' },
        { name: 'Bob', age: 35, country: 'UK' },
    ];

    return <Table columns={columns} data={data} />;
};