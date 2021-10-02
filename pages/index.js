import Head from 'next/head'; 
import Link from 'next/link';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';


//componentes são criados a partir de funções, em JS
//alt+shift+seta
export default function Index(){
  return (
    <div>
      <Header title="TreinaCook - Receitas"/>
      
      <main>
        
        <Main
          name="Ratatouille"
          category="Saladas e acompanhamentos"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/135/302/346231/346231_original.jpg?mode=crop&width=710&height=400"
          link="/receitas/saladas/ratatouille"
        />
        <Main
          name="Torta Holandesa"
          category="Tortas"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/199/018/312801/312801_original.jpg?mode=crop&width=710&height=400"
          link="/receitas/tortas/torta-holandesa"
        />
        <Main
          name="Sushi"
          category="Comida Japonesa"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/062/192/118231/118231_original.jpg?mode=crop&width=710&height=400"
          link="/receitas/comida-japonesa/sushi"
        />
        <Main
          name="Frango Xadrez"
          category="Comida Chinesa"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/000/897/344249/344249_original.jpg?mode=crop&width=710&height=400"
          link="/receitas/comida-chinesa/frango-xadrez"
        />
        <Main
          name="Yakissoba"
          category="Comida Chinesa"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/092/694/274549/274549_original.jpg?mode=crop&width=710&height=400"
          link="/receitas/comida-chinesa/yakissoba"
        />
      </main>
      
      <Footer/>
    </div>
  )
}
