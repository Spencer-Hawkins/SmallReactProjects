import { Fragment } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Link } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'Learning React is fun!'},
  {id: 'q2', author: 'Maxyy', text: 'Learning React is Great!'},
];



const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const {quoteId} = params;
  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

 
  useEffect(()=> {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);


  if(status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner/>
    </div>
  }

  if(error){
    return <p className='centered'>{error}</p>
  }

  if(!loadedQuote.text){
    return <p>No Quote found</p>
  }

  return <Fragment>
    
    <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}></HighlightedQuote>
    <Route path={`/quotes/${params.quoteId}`} exact>
    <div className='centered'>
      <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
    </div>
    </Route>
    
    <Route path={`${match.path}/comments`}>
      <Comments></Comments>
    </Route>
    </Fragment>
};

export default QuoteDetail;
