import Recipe from '../../../components/Recipe/Recipe';

export default function Yakissoba(){
    return(
        <div>   

            <Recipe
                name="Yakissoba"
                picture="https://img.itdg.com.br/tdg/images/recipes/000/092/694/274549/274549_original.jpg?mode=crop&width=710&height=400"
                time="60 minutos"
                servings="7 porções"
            >
                <h2>Ingredientes</h2>

                <h3>Molho</h3>
                    <ul>
                        <li>1 colher (sopa) de açúcar</li>
                        <li>1 cebola ralada</li>
                        <li>500 ml de água</li>
                        <li>1 colher (sopa) de amido de milho</li>
                        <li>1 pedaço de gengibre (5 cm) ralado</li>
                        <li>150 ml de shoyu</li>
                        <li>1 + ½ colher (sopa) de manteiga</li>
                    </ul>

                <h3>Yakissoba</h3>
                    <ul>
                        <li>500 g de macarrão para yakissoba</li>
                        <li>2 cebolas</li>
                        <li>1 colher (sopa) de manteiga</li>
                        <li>1/2 maço de brócolis</li>
                        <li>1/2 maço de couve-flor</li>
                        <li>1 pimentão</li>
                        <li>2 cenouras</li>
                        <li>1/2 repolho roxo</li>
                        <li>500 ml do molho para yakissoba</li>
                        <li>50 ml de shoyu</li>
                        <li>250 g de filé de frango</li>
                        <li>150 g de calabresa</li>
                    </ul>

                <h2>Modo de preparo</h2>

                <h3>Molho</h3>
                    <ol>
                        <li>Coloque a manteiga para esquentar em uma panela.</li>
                        <li>Com a manteiga quente, junte a cebola e o gengibre, ambos previamente ralados e deixe refogar.</li>
                        <li>Após refogá-los, junte o molho shoyu e deixe por mais um tempo.</li>
                        <li>Acrescente a água (já com o amido diluído) e o açúcar e espere ferver para adquirir consistência.</li>
                    </ol>

                <h3>Yakissoba</h3>
                    <ol>
                        <li>Cozinhe o macarrão em água salgada por 4 minutos, reserve.</li>
                        <li>Em uma panela grande, coloque a manteiga e dê uma leve "fritada" na calabresa, em seguida acrescente o frango (pré-cozido) e a cebola até ambos dourarem.</li>
                        <li>Rapidamente, acrescente o brócolis, a couve-flor, a cenoura, o pimentão e o repolho roxo, temperando com o shoyu.</li>
                        <li>Coloque o molho para yakissoba e deixe cozinhar até os legumes ficarem cozidos.</li>
                        <li>Adicione o macarrão, misturando bem e sirva logo a seguir.</li>
                    </ol>
                    
            </Recipe>

        </div>
    )
}