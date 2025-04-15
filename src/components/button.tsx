interface BotaoProps {
    text: string;
    onClick: () => void;
}

export const Botao = ({ text, onClick }: BotaoProps) => {
    return (
        <button onClick={onClick} className="botao">
            {text}
        </button>
    );
}