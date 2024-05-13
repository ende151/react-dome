import newContext from './context'


function newCom(Com) {
    return (props) => {
        return (
            <newContext.Consumer>
                {(value) => {
                    return <Com {...props} {...value} />
                }}
            </newContext.Consumer>
        )
    }
}
export default newCom