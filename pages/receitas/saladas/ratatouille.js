import Recipe from '../../../components/Recipe/Recipe';

export default function Ratatouille(){
    return(
        <div>
            <Recipe
                name="Ratatouille"
                picture="https://img.itdg.com.br/tdg/images/recipes/000/135/302/346231/346231_original.jpg?mode=crop&width=710&height=400"
                time="40 minutos"
                servings="10 porções"
            >
                <h2>Ingredientes</h2>

                <h3>Molho</h3>
                    <ul>
                        <li>2 abobrinhas</li>
                        <li>2 berinjelas</li>
                        <li>2 cebolas</li>
                        <li>3 tomates</li>
                        <li>1 pimentão verde</li>
                        <li>1 pimentão amarelo</li>
                        <li>1 pimentão vermelho</li>
                        <li>azeite a gosto</li>
                        <li>alecrim a gosto</li>
                        <li>manjericão a gosto</li>
                        <li>alho a gosto</li>
                        <li>sal a gosto</li>
                        <li>louro a gosto</li>
                        <li>molho de tomate para cobrir o fundo da forma</li>
                    </ul>

                <h2>Modo de preparo</h2>

                    <ol>
                        <li>Corte os vegetais em rodelas finas sem as sementes.</li>
                        <li>Cubra o fundo de uma forma com o molho de tomate.</li>
                        <li>Monte tudo intercalando com os vegetais.</li>
                        <li>Amasse o alho e espalhe por cima acrescentando o sal e o alecrim a gosto.</li>
                        <li>Regue com um pouco de azeite e cubra com papel-manteiga ou alumínio.</li>
                        <li>Leve ao forno por 40 minutos a uma temperatura de 180° C a 200° C.</li>
                    </ol>
                    
            </Recipe>

        </div>
    )
}