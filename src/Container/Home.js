import React,{Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { latestNews,artistNews,galNews} from '../action';
import { bindActionCreators} from 'redux';
import LatestDisplay  from '../Component/Home/LatestDisplay';
import ArtistDisplay from '../Component/Home/ArtistDisplay';
import GalleryDisp from '../Component/Home/GalleryDisplay';

class Home extends Component{
    componentDidMount(){
        this.props.latestNews()
        this.props.artistNews()
        this.props.galNews()
        
    }

    render(){
        return(
            <Fragment>
                <LatestDisplay ldata={this.props.datalist.latestData}/>
                <ArtistDisplay adata={this.props.datalist.artistData}/>
                <GalleryDisp gdata={this.props.gallist.galData}/>
            </Fragment>
        )
    }
}


function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.articles,
        gallist:state.galeries

      
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,artistNews,galNews}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)