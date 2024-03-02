import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Row from './components/row/Row';
import requests from './config/Requests';

function App() {

  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Row 
    	title="Tendances du moment" 
      	fetchUrl={requests.fetchTrending}
		isPoster={true}
		/>
     <Row 
			title="Les plus populaires" 
			fetchUrl={requests.fetchPopular}
		 />
     <Row 
		 	title="Les mieux notés" 
			 fetchUrl={requests.fetchTopRated}
		 />
     <Row 
		 		title="Action" 
			 fetchUrl={requests.fetchActionMovies}
		 />
		 <Row 
		 		title="Horreur" 
			 fetchUrl={requests.fetchHorrorMovies}
		 />
		 <Row 
		 		title="Comédie" 
			 fetchUrl={requests.fetchComedyMovies}
		 />
		 <Row 
		 		title="Documentaire" 
			 fetchUrl={requests.fetchDocumentaryMovies}
		 />
     {/* video */}
     {/* quick view */}
     <Footer />
    </div>
  );
}

export default App;
