import React from 'react'

const UpdatedComponent = (OrginalComponent, num) => {
    class NewComponents extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState( prevState => {
                return { count: prevState.count + num }
            })
        }

        render(){
            console.log(this.props.name)
            return <OrginalComponent count={this.state.count} incrementCount={this.incrementCount}
            { ... this.props}/>
        }
    }
    return NewComponents
}
export default UpdatedComponent