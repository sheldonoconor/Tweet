import React from 'react';
import './search.scss';
import {UtilService} from '../../services/UtilService';

export interface ISearchProps {
    name?: string;
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    style?: {};
    className?: string;
}

export interface ISearchState {
    value: string;
}


export class Search extends React.Component<ISearchProps, ISearchState> {

    static defaultProps: ISearchProps = {
        onChange: undefined,
        placeholder: '',
        className: ''
    };

    state: ISearchState = {
        value: '',
    };

    private handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        if (this.props.onChange) {
            this.props.onChange(newValue);
        }
        this.setState({value: newValue});
    };

    render () {
        const customProps = UtilService.omit(this.props, ['onChange', 'className', 'value']);
        return (
            <div className={`search-container ${this.props.className}`}>
                <input {...customProps}
                       type='text'
                       className={`search-box ${this.props.className}`}
                       value={this.state.value} size="24"
                       onChange={this.handleOnChange}
                />
            </div>
        );
    }
}
