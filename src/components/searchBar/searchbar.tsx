import * as React from "react";
import {AlertSearchBar} from './searchbar-info';
import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
//Import styles
import {btnsearchcss} from './styles/searchbar-styles'
interface IComponentNameProps {};
interface IComponentNameState {};

 export class Searchbar extends React.Component<IComponentNameProps, IComponentNameState> {
    public render(): JSX.Element{
        return (
        <div>
                <ButtonToolbar>
                     <input/>
                    <Button bsStyle="primary" bsSize="small" className={btnsearchcss}>Search</Button>
                </ButtonToolbar>
        </div>);
    }
}


