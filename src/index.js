import React, { Component } from 'react';    //React knows how to render the components/elemts, i.e. manage components
import ReactDOM from 'react-dom';// Render's react component to DOM, Basically used to render DOM
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/Video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';


const API_KEY = 'AIzaSyDuFtZHAHs9frZTimVBFoP4Pti6ZkKSE7I';

// Create a component which produces some html
class App extends Component {  //const App = function(){  // App is constant because we dont want this variable to change again in future.


    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });    // this.setState({ videos : videos }); // When kEy and Value are same we can just use one name
        });

        // YTSearch({ key: API_KEY, term: 'surfboards' }, (data) => {
        //    this.setState({videos : data});
        // });
    }

    render() {

const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        )
    }
}

// Take this component's generated html and put it on page (DOM)

ReactDOM.render(<App />, document.querySelector('.container')); //We changed from App to <App /> because we need to pass component's instance not the component. So to make it istances we need to place them inside the JSX Tags.

// instead of <App></App> we can just write <App /> if there's nothing in between.
// First argument says what to render and second argument says where to render this component.
// Second argument is a reference to the existing DOM element on the page. So what we are saying is that Render the component and produce some HTML and insert that html into second argument.

