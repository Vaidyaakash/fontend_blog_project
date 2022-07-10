import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Block from '../Blocks/Block';
import Block2 from '../Blocks/Block2';
import Block3 from '../Blocks/Block3';
import { data } from '../Data/BlogApi';


const Home = () => {
  const [response] = useContext(data)


  return (
    <div className='main'>
      <div className='img'>
        <span id='span'>
          {response.filter((e) => (e.id === "0")).map((c) => { return (<Link to="/tourism"> <img src={c.image} alt="Not found" className="img1" /></Link>) })}
          <span className='span'>
            <span className='kerala'>
              Kerala Attracts Domestic Tourists
            </span>
            <div>Tourism / May 25, 2022</div>
          </span>
        </span>

        <section>
          {response.filter((e) => (e.id === "48")).map((c) => { return (<Link to="/sports"> <img src={c.image} alt="Not found" className="img2" /></Link>) })}
          {response.filter((e) => (e.id === "49")).map((c) => { return (<Link to="/technology"> <img src={c.image} alt="Not found" className="img2" /></Link>) })}
        </section>
      </div>

      <section className='section__2'>
        <h1 className='latest'>The Latest</h1>

        <div className='response'>
          {response.filter((e) => (e.category === "Bollywood" && e.id === "11")).map((c) => {
            return (
              <Block
                ids={c.id}
                imgUrl={c.image}
                title={c.title}
                description={c.description}
                date={c.date}
                category={c.category} />)
          })}
          {response.filter((e) => (e.category === "Technology" && e.id === "111")).map((c) => {
            return (
              <Block
                ids={c.id}
                imgUrl={c.image}
                title={c.title}
                description={c.description}
                date={c.date}
                category={c.category} />)
          })}
          {response.filter((e) => (e.category === "Health" && e.id === "1111")).map((c) => {
            return (<Block
              ids={c.id}
              imgUrl={c.image}
              title={c.title}
              description={c.description}
              date={c.date}
              category={c.category} />)
          })}
        </div>
      </section>
      <div id='middle_center'>
        <div className='response2'>
          <div className='article0'>
            <h1 className='latest_1'>Latest Articles </h1><hr />
            {response.filter((e) => (e.id === "14")).map((c) => { return (<Block2 ids={c.id} imgurl={c.image} description={c.description} category={c.category} date={c.date} title={c.title} />) })}<hr />
            {response.filter((e) => (e.id === "24")).map((c) => { return (<Block2 ids={c.id} imgurl={c.image} description={c.description} category={c.category} date={c.date} title={c.title} />) })}<hr />
            {response.filter((e) => (e.id === "5")).map((c) => { return (<Block2 ids={c.id} imgurl={c.image} description={c.description} category={c.category} date={c.date} title={c.title} />) })}<hr />
            {response.filter((e) => (e.id === "39")).map((c) => { return (<Block2 ids={c.id} imgurl={c.image} description={c.description} category={c.category} date={c.date} title={c.title} />) })}<hr />
            {response.filter((e) => (e.id === "36")).map((c) => { return (<Block2 ids={c.id} imgurl={c.image} description={c.description} category={c.category} date={c.date} title={c.title} />) })}
          </div>

          <div className='article1'>
            <h1 className='latest_2'> Top Post</h1><hr />
            {response.filter((e) => (e.id === "14")).map((c) => { return (<Block3 ids={c.id} imgUrl={c.image} title={c.title} date={c.date} description={c.description} category={c.category} />) })}<hr />
            {response.filter((e) => (e.id === "24")).map((c) => { return (<Block3 ids={c.id} imgUrl={c.image} title={c.title} date={c.date} description={c.description} category={c.category} />) })}<hr />
            {response.filter((e) => (e.id === "5")).map((c) => { return (<Block3 ids={c.id} imgUrl={c.image} title={c.title} date={c.date} description={c.description} category={c.category} />) })}<hr />
            {response.filter((e) => (e.id === "39")).map((c) => { return (<Block3 ids={c.id} imgUrl={c.image} title={c.title} date={c.date} description={c.description} category={c.category} />) })}<hr />
            {response.filter((e) => (e.id === "36")).map((c) => { return (<Block3 ids={c.id} imgUrl={c.image} title={c.title} date={c.date} description={c.description} category={c.category} />) })}
            <div className='adv'>
              <h1>Advertisement</h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className='article2'>
        <h1 className='latest_3'> Latest Stories</h1><hr />

        <div className='latest_stories'>
          {response.filter((e) => (e.id === "8")).map((c) => { return (<Block ids={c.id} imgUrl={c.image} title={c.title} description={c.description} date={c.date} category={c.category} />) })}
          {response.filter((e) => (e.id === "18")).map((c) => { return (<Block ids={c.id} imgUrl={c.image} title={c.title} description={c.description} date={c.date} category={c.category} />) })}
          {response.filter((e) => (e.id === "28")).map((c) => { return (<Block ids={c.id} imgUrl={c.image} title={c.title} description={c.description} date={c.date} category={c.category} />) })}
        </div>
      </div>
    </div>
  )
}

export default Home;