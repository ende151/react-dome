import React, { PureComponent } from 'react'

export class AppIndex extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            bookList: [
                {
                    name: 'vue高级设计',
                    pice: 99,
                },
                {
                    name: 'react高级设计',
                    pice: 229,
                },
                {
                    name: 'js高级设计',
                    pice: 59,
                },
            ]
        }
    }
    handleAdd() {
        const books = [...this.state.bookList]
        books.push({
            name: 'js高级设计',
            pice: 59,
        })
        this.setState({ bookList: books })
    }
    handleEdit(object,index) {
        // this.setState({ bookList })
        const books = [...this.state.bookList]
        books[index].pice ++
        this.setState({ bookList: books })
        console.log('我是要修改的', object)
    }
    render() {
        const { bookList } = this.state
        return (
            <div>
                <ul>
                    {
                        bookList.map((item, index) => {
                            return <li key={index}>{item.name}---{item.pice}
                                <button onClick={() => this.handleEdit(item,index)}>修改</button>
                            </li>
                        })
                    }
                </ul>
                <button onClick={() => this.handleAdd()}>添加</button>
            </div>
        )
    }
}

export default AppIndex
