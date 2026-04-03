

interface Props {
    name: string,
    age: number
}

const IndexPage = ({name, age}: Props) => {
    return (
        <div>
            <h1>Xin chào {name}</h1>
            <div>Tuổi của bạn là {age}</div>
        </div>
    )
}
 
export default IndexPage;