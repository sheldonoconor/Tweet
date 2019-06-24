import React from 'react';
import './analytics.scss';

export interface IAnalyticsProps {
    header: string;
    value: any;
}

export const Analytics = (props: IAnalyticsProps) => (
    <div className='analytics-container'>
        <div className='header'>{props.header}</div>
        <div className='value'>{props.value}</div>
    </div>
);
