import { Card } from '../ui/card'
import { SignUpCardHeader } from './SignUpCardHeader'
import { SignUpCardContent } from './SignUpCardContent'

export const SignUpForm = () => {
    return (
        <Card className="
                rounded-none flex justify-center p-4 
                sm:p-8 sm:rounded-none 
                md:rounded-xl md:p-26 
                lg:p-1 
                xl:p-10
            ">

            <SignUpCardHeader />

            <SignUpCardContent />

            {/* <SignUpCardFooter /> */}

        </Card>
    )
}
