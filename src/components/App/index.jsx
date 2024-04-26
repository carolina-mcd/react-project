import { useState } from 'react';
import Post from '../Post';
import { Header } from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';

import './App.scss';


function App() {
    const [posts, setPosts] = useState([
    {id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false, removed: false },
    {id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: false, removed: false },
    {id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false, removed: false },
    {id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 50, read: false, removed: false },
  ]);

  

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Title#0${prevState.length + 1}`,
          subtitle: `Sub#0${prevState.length + 1}`,
          likes:50,
        },
      ]);
    }); 
      
  }

  function handleRemovePost(postId){
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId
          ? { ...post, removed: true }
          : post
      )
    ));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2 className='title-h2'>
          Post da semana
          <button onClick={handleRefresh}>Atualizar</button>
          </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={post}
        
        />
      ))}
    </ThemeProvider>
    
  )
}

export default App


// Props - Mudam um valor de vários componentes.
// Props children - pega todo o valor que passamos dentro de um componente.