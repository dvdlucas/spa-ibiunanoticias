import {CardBody, CardContainer, CardFooter} from '../Card/CardStyle'

export function Card(props) {
    return (
        <CardContainer>
            <CardBody>
            <div>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <img src={props.banner} alt="Imagem" />
            </CardBody>
            <CardFooter>
            <div>
            <i className="bi bi-hand-thumbs-up"></i>
            <span>{props.likes}</span>
            </div>

            <div>
            <i className="bi bi-chat"></i>
            <span>{props.comments}</span>
            </div>
            </CardFooter>
        </CardContainer>
    );
}