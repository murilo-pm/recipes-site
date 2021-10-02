import Recipe from '../../../components/Recipe/Recipe';

export default function TortaHolandesa(){
    return(
        <div>
            <Recipe
                name="Torta Holandesa"
                picture="https://img.itdg.com.br/tdg/images/recipes/000/199/018/312801/312801_original.jpg?mode=crop&width=710&height=400"
                time="60 minutos"
                servings="10 porções"
            >
                <h2>Ingredientes</h2>

                    <ul>
                        <li>150 de biscoito de maisena</li>
                        <li>100 g de manteiga sem sal</li>
                        <li>1 xícara de açúcar refinado</li>
                        <li>200 g de manteiga sem sal</li>
                        <li>500 ml de creme de leite gelado</li>
                        <li>170 g de chocolate meio amargo derretido</li>
                        <li>200 g de creme de leite</li>
                    </ul>

                <h2>Modo de preparo</h2>

                <h3>Massa</h3>
                    <ol>
                        <li>Triture o biscoito no processador e misture com a manteiga, formando uma farofinha.</li>
                        <li>Forre uma forma de aro removível com a farofinha, pressionando bem.</li>
                        <li>Pré-asse a massa (180° C), por cerca de 10 minutos.</li>
                        <li>Retira a massa do forno e espere esfriar.</li>
                    </ol>

                <h3>Recheio</h3>
                    <ol>
                        <li>Na batedeira, misture o açucar com a manteiga até fica homogêneo.</li>
                        <li>Adicione o creme de leite e a essência de baunilha e volte a bater.</li>
                        <li>Para a cobertura: misture o chocolate meio amargo derretido com o creme de leite.</li>
                    </ol>

                <h3>Montagem</h3>
                    <ol>
                        <li>Depois de preaquecer a massa e deixar esfriar, coloque os biscoitos redondos ao redor da forma.</li>
                        <li>Adicione o recheio e leve à geladeira por 4 horas.</li>
                        <li>Retire da geladeira e despeje a cobertura por cima.</li>
                        <li>Volte à geladeira por mais 6 horas.</li>
                    </ol>
                    
            </Recipe>
            
        </div>
    )
}