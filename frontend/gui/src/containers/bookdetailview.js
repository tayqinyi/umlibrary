import React from 'react';
import axios from 'axios';
import {Descriptions} from 'antd';

class BookDetailView extends React.Component {
    state = {
        book: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/${id}`)
        .then(res => {
            this.setState ({
                book: res.data });
        })
    }

    render() {
        return (
          <Descriptions title={this.state.book.title}>
            <Descriptions.Item label="Description">{this.state.book.desc}</Descriptions.Item>
          </Descriptions>
        )
    }
}

export default BookDetailView;