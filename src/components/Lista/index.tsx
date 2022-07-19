import { Itarefa } from "../../types/tarefas";
import Item from "./Item";
import style from './Lista.module.scss';

interface Props{
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa)=> void
}

function Lista({tarefas, selecionaTarefa}:Props){
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item,index)=>(
                    <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
                    />
                ))}
               
            </ul>
        </aside>
    )
}

export default Lista;