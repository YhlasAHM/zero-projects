
import { Wrapper } from "../../../components/wrapper";

export const WrapperContent = ({ children }) => {
    return (
        <Wrapper
            sx={{
                display: "flex",
                flexWrap: "wrap",
                p: 3,
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
            }}
        >
            {children}
        </Wrapper>
    )
}