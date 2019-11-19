import React from 'react';
import ReactDOM from 'react-dom';
import './datatable.css';

export default class DataTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            headers: props.headers,
            data: props.data,
            sortby: null,
            descending: null,
        }

        this.keyField = props.keyField || "id";
    }

    renderTableHeader = () => {
        let { headers } = this.state;
        headers.sort((a, b) => {
            if (a.index > b.index) return 1;
            return -1;
        }); 

        let headerView = headers.map((header, index) => {
            let title = header.title;
            let cleanTitle = header.accessor;

            if (this.state.sortby === index) {
                title += this.state.descending ? '\u2193' : '\u2191';
            }

            return (
                <th key={cleanTitle}
                    ref={(th) => this[cleanTitle] = th}
                    data-col={cleanTitle}>
                    <span data-col={cleanTitle} className="header-cell">
                        {title}
                    </span>
                </th>
            );
        });

        return headerView;
    }

    renderContent = () => {
        let { headers } = this.state;
        let { data } = this.state;
        //let data = this.state.data;

        let contentView = data.map((row, rowIdx) => {
            
            let id = row[this.keyField];
            let tds = headers.map((header, index) => {
            let content = row[header.accessor];
                return (
                    <td key={index} data-id={id} data-row={rowIdx}>
                        {content}
                    </td>
                );
               
            });
            
            return (
                <tr key={rowIdx}>
                    {tds}
                </tr>
            );
        });
        return contentView;
        
    }

    onSort = (e) => {
        let data = this.state.data.slice();
        let colIndex = ReactDOM.findDOMNode(e.target).parentNode.cellIndex;
        let colTitle = e.target.dataset.col;
        let descending = !this.state.descending;

        data.sort((a, b) => {
            let sortVal = 0;

            if (a[colTitle].localeCompare(b[colTitle]) < b[colTitle].localeCompare(a[colTitle])) {
                sortVal = -1;
            } else if (a[colTitle].localeCompare(b[colTitle]) > b[colTitle].localeCompare(a[colTitle])) {
                sortVal = 1;
            };

            if (descending) {
                sortVal = sortVal * -1;
            }
            return sortVal;
        });

        this.setState({
            data,
            sortby: colIndex,
            descending
        });
    }

    renderTable = () => {
        let headerView = this.renderTableHeader();
        let contentView = this.renderContent();

        return (
            <table className="data-inner-table">
                <thead onClick={this.onSort}>
                    <tr>
                        {headerView}
                    </tr>
                </thead>
                <tbody>
                    {contentView}
                </tbody>
            </table>
        );
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data.length !== prevState.data.length) {
            return {
                headers: nextProps.headers,
                data: nextProps.data,
                sortby: prevState.sortby,
                descending: prevState.descending,
            }
        }
        return null;
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.renderTable()}
            </div>
        )
    }
}