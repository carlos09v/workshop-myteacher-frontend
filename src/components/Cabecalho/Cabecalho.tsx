import { CabecalhoContainer, Logo } from "./Cabecalho.style"

const Cabecalho = () => {
    return (
        // JSX
        <CabecalhoContainer>
            <div>
                <Logo src="/img/myteacher.png" />
            </div>

            <p>Encontre o professor perfeito!</p>
        </CabecalhoContainer>
    )
}

export default Cabecalho