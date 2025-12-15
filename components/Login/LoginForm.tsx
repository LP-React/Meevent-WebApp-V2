import { Card } from "../ui/card"
import { LoginCardHeader } from './LoginCardHeader';
import { LoginCardContent } from "./LoginCardContent";
import { LoginCardFooter } from "./LoginCardFooter";


export const LoginForm = () => {
    return (
        <Card className="
        flex rounded-none justify-evenly p-4
        sm:p-8 sm:rounded-none 
        md:rounded-xl md:p-26 
        lg:p-1 
        xl:p-10
        ">
            <LoginCardHeader />

            <LoginCardContent />

            <LoginCardFooter />

        </Card>
    )
}
