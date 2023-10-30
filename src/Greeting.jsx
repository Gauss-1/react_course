export function Greeting(props) {
    console.log(props)
    return < h1>{props.title}</h1>

}
/*estas son dos formas de exporlar los componentes individualmente (cadauno en su archivo)*/

export function UserCard(){
    return <h3> ya Estoy viejo </h3>
}
