import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Search} from './components/Search/Search';
import {List} from './components/List/List';
import {ITweet, ITweetMetaData} from './types/ITweet';
import {Analytics} from './components/Analytics/Analytics';

const regex = '\\n\\n\u261e';

export interface IAppProps {
  search(value: string): Promise<{statuses: ITweet[], search_metadata: ITweetMetaData}>
}

export interface IAppState {
  tweets: ITweet[];
  tweetMetaData: ITweetMetaData;
  searchValue: string;
  hadInitialSearch: boolean;
}

class App extends React.Component<IAppProps, IAppState> {

  state: IAppState = {
    tweets: [],
    tweetMetaData: {
      completed_in: 0,
      count: 0
    },
    searchValue: '',
    hadInitialSearch: false
  };

  onSearch = (value: string) => {
    this.setState({searchValue: value, hadInitialSearch: true});

    this.props.search(value)
        .then(
            (results: any) => this.setState({tweets: results.statuses, tweetMetaData: results.search_metadata}),
            (error) => console.log(error)
        )
  };

  render() {
    const tweets = this.state.tweets.map((tweet: ITweet) => {
      const cutoff = tweet.text.search(regex) !== -1 ? tweet.text.search(regex) : tweet.text.length;
      return {
        ...tweet,
        text: tweet.text.substring(0, cutoff)
      }
    });
    const {hadInitialSearch} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            {hadInitialSearch ? (
                <div className='tweet-analytics'>
                  <Analytics header='Tweets' value={this.state.tweetMetaData.count} />
                  <Analytics header='Time' value={this.state.tweetMetaData.completed_in} />
                </div>
            ): (
                undefined
            )
            }
            <Search className='search-bar' placeholder='Search a hashtag...' onChange={this.onSearch}/>
            <List className='list-box' data={tweets}/>
          </header>
        </div>
    );
  }
}

export default App;
