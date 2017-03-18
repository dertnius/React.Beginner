import {Alert} from 'react-bootstrap'
import * as React from 'react'

const AlertSearchBar : React.StatelessComponent<React.HTMLProps<JSX.Element>> = (props: React.HTMLProps<JSX.Element> & {
type?:string
}) => {
    return (
    <Alert bsStyle="warning">
    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
    </Alert>
    )
}


export { AlertSearchBar }