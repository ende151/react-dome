import React, { Component } from 'react';

class titleIndex extends Component {
    render() {
        const { Lists, ListType } = this.props;
        return (
            <div>
                我是里面的内容
                <div>
                    {
                        Lists.map((item, index) => {
                            return (
                                ListType(item)
                                // < div key = { index } > { item }</div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default titleIndex;