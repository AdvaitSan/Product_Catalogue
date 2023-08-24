import './App.css';
import { useEffect, useState } from 'react';
import Card from './card';
import dhooni from './images/dhooni baba.png';
import ramdev from './images/ramdev.gif';
import Search from './Search';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function App() {
  const [products, setProducts] = useState([]);
  const [nums, setNums] = useState(1);
  const [skip, setSkip] = useState(0);
  const [api, setApi] = useState(`https://dummyjson.com/products?limit=30&skip=${skip}`);

  const getData = () => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const PrevClick = () => {
    if (nums > 1 || skip > 0) {
      setSkip(skip - 30);
      setNums(nums - 1);
      setApi(`https://dummyjson.com/products?limit=30&skip=${skip - 30}`);
    }
  };

  const NextClick = () => {
    setSkip(skip + 30);
    setNums(nums + 1);
    setApi(`https://dummyjson.com/products?limit=30&skip=${skip + 30}`);
  };

  useEffect(() => {
    getData();
  }, [api]);

  return (
    <Router>
      <div className='bg-gray-400 border-2 border-black'>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className='Navbar'
        >
          <div className='flex flex-wrap justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 border-4 border-black'>
            <motion.div
              initial={{ x: -850 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.7 }}
              className='flex flex-wrap justify-center items-center bg-yellow-200 rounded-full my-3'
            >
              <div>
                <img
                  className='w-20 rounded-full ml-10 border-1 border-orange-70 hover:w-32'
                  src={ramdev}
                  alt='Image'
                />
              </div>
              <div>
                <p className='text-4xl font-mono font-bold text-emerald-600 mt-1 ml-10 mr-10'>
                  {' '}
                  Dhoonibaba.com
                </p>
              </div>
            </motion.div>
            <div>
              <motion.div
                initial={{ x: 850 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  to='/search'
                  className='transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 hover:text-3xl duration-300 bg-red-700 text-2xl text-white rounded-xl pl-3 pr-1 pb-1 ml-10 border-white border-2'
                >
                  Category
                </Link>
                <Link
                  to='/'
                  className='transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 hover:text-3xl duration-300 bg-red-700 text-2xl text-white rounded-xl pl-3 pr-1 pb-1 ml-10 border-white border-2'
                >
                  Home
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <Switch>
          <Route exact path='/'>
            <div className='cards'>
              <div className='flex flex-wrap justify-center items-center h-500 min-screen '>
                {products.map(product => (
                  <div key={product.id}>
                    <Card {...product} />
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: -10 }}
              transition={{ delay: 2 }}
              className='Footer'
            >
              <div className='flex flex-wrap justify-center items-center'>
                <button
                  className='bg-yellow-400 font-mono font-bold mx-4 my-8 text-5xl rounded-lg'
                  onClick={PrevClick}
                >
                  Prev
                </button>

                <p className='font-mono font-bold ml-4 mr-2 my-8 text-3xl text-slate-500'>
                  {nums - 1}
                </p>

                <p className='font-mono font-bold  my-8 text-5xl text-white'>
                  {nums}
                </p>
                <p className='font-mono font-bold mr-4 ml-2 my-8 text-3xl text-slate-500'>
                  {nums + 1}
                </p>
                <button
                  className='bg-yellow-400 font-mono font-bold mx-4 my-8 text-5xl rounded-lg'
                  onClick={NextClick}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </Route>
          <Route exact path='/search'>
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
