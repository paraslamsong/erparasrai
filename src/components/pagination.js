import Pagination from 'react-bootstrap/Pagination';
export function ProPagination({ currentPage, totalPage, onPageChange }) {
    const loop = (times, callback) => {
        for (let i = 0; i < times; i++) {
            callback(i);
        }
    };
    return (
        <Pagination size={"sm"}>
            <Pagination.First
                onClick={() => {
                    onPageChange(0);
                }}
            />
            <Pagination.Prev
                onClick={() => {
                    if (currentPage > 0) {
                        onPageChange(currentPage - 1);
                    }
                }}
            />
            {
                loop(totalPage, i => {
                    return <Pagination.Item>{i + 1}</Pagination.Item>
                })
            }
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next
                onClick={() => {
                    if (currentPage < totalPage) {
                        onPageChange(currentPage + 1);
                    }
                }}
            />
            <Pagination.Last
                onClick={() => {
                    onPageChange(totalPage);
                }}
            />
        </Pagination>
    );
}