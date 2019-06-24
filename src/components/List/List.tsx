import React from 'react';
import './list.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {ITweet} from '../../types/ITweet';
import {UtilService} from '../../services/UtilService';

export interface IDropdownListProps {
    data: ITweet[];
    className?: string;
    style?: any;
}

export class List extends React.Component<IDropdownListProps> {

    static defaultProps: IDropdownListProps = {
        data: [],
        className: ''
    };

    private static getTweetHTML (index: number, text: string, hashTags: string, date: string, favorite_count: number) {
        return (
            <div key={index} className='list-element'>
                <div className='list-adjust-right list-text'>{text}</div>
                <div className='list-adjust-right list-hash'>{hashTags}</div>
                <div className='list-bottom'>
                    <div>{date}</div>
                    <div>
                        <FontAwesomeIcon className='list-star' icon={faStar} />{favorite_count}
                    </div>
                </div>
            </div>
        );
    }

    render () {
        const customProps = UtilService.omit(this.props, ['className']);
        const options = this.props.data.map((option, index) => {
            const hashTags = option.entities.hashtags.reduce((acc: string, hashTag: any) => `${acc} #${hashTag.text}`, '');
            const date = (new Date(option.created_at)).toDateString();
            return List.getTweetHTML(index, option.text, hashTags, date, option.favorite_count);
        });
        return (
            <div className={`list-container ${this.props.className}`} {...customProps}>
                {options}
            </div>
        );
    }
}
